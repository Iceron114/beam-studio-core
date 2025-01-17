/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
import Alert from 'app/actions/alert-caller';
import Dialog from 'app/actions/dialog-caller';
import ElectronDialogs from 'app/actions/electron-dialogs';
import MonitorController from 'app/actions/monitor-controller';
import Progress from 'app/actions/progress-caller';
import AlertConstants from 'app/constants/alert-constants';
import FontConstants from 'app/constants/font-constants';
import { Mode } from 'app/constants/monitor-constants';
import { showCameraCalibration } from 'app/views/beambox/Camera-Calibration';
import { showDiodeCalibration } from 'app/views/beambox/Diode-Calibration';
import AlertStore from 'app/stores/alert-store';
import BeamboxStore from 'app/stores/beambox-store';
import AlertConfig from 'helpers/api/alert-config';
import Config from 'helpers/api/config';
import fluxId from 'helpers/api/flux-id';
import autoSaveHelper from 'helpers/auto-save-helper';
import checkDeviceStatus from 'helpers/check-device-status';
import checkFirmware from 'helpers/check-firmware';
import checkQuestionnaire from 'helpers/check-questionnaire';
import DeviceMaster from 'helpers/device-master';
import firmwareUpdater from 'helpers/firmware-updater';
import OutputError from 'helpers/output-error';
import sprintf from 'helpers/sprintf';
import VersionChecker from 'helpers/version-checker';
import storage from 'helpers/storage-helper';
import i18n from 'helpers/i18n';
import { getSVGEdit } from 'helpers/svg-editor-helper';
import sentryHelper from 'helpers/sentry-helper';
import { IDeviceInfo } from 'interfaces/IDevice';
import { IFont } from 'interfaces/IFont';

import BeamboxPreference from './beambox-preference';
import Constant from './constant';
import ImageTracePanelController from './Image-Trace-Panel-Controller';
import ToolPanelsController from './Tool-Panels-Controller';
import Tutorials from './tutorials';

let menuEventRegistered = false;

const init = (): void => {
  ToolPanelsController.init('tool-panels-placeholder');
  ImageTracePanelController.init('image-trace-panel-placeholder');

  if (Constant.addonsSupportList.autoFocus.includes(BeamboxPreference.read('workarea'))) {
    const defaultAutoFocus = BeamboxPreference.read('default-autofocus');
    BeamboxPreference.write('enable-autofocus', defaultAutoFocus);
  } else {
    BeamboxPreference.write('enable-autofocus', false);
  }
  if (Constant.addonsSupportList.hybridLaser.includes(BeamboxPreference.read('workarea'))) {
    const defaultDiode = BeamboxPreference.read('default-diode');
    BeamboxPreference.write('enable-diode', defaultDiode);
  } else {
    BeamboxPreference.write('enable-diode', false);
  }

  let defaultBorderless = BeamboxPreference.read('default-borderless');
  if (defaultBorderless === undefined) {
    BeamboxPreference.write('default-borderless', BeamboxPreference.read('borderless'));
    defaultBorderless = BeamboxPreference.read('default-borderless');
  }
  if (Constant.addonsSupportList.openBottom.includes(BeamboxPreference.read('workarea'))) {
    BeamboxPreference.write('borderless', defaultBorderless);
  } else {
    BeamboxPreference.write('borderless', false);
  }

  const config = Config();
  if (!config.read('default-units')) {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    const isEn = navigator.language.slice(0, 2).toLocaleLowerCase() === 'en';
    if (timeZone.startsWith('America') && isEn) {
      config.write('default-units', 'inches');
    }
  }
  if (!config.read('default-font')) {
    initDefaultFont();
  }
  initMenuBarEvents();
  autoSaveHelper.init();
  fluxId.init();
  BeamboxStore.onDrawGuideLines(displayGuides);
};

const displayGuides = () => {
  document.getElementById('horizontal_guide')?.remove();
  document.getElementById('vertical_guide')?.remove();

  const guidesLines = (() => {
    const svgedit = getSVGEdit();
    const svgdoc = document.getElementById('svgcanvas').ownerDocument;
    const { NS } = svgedit;
    const linesGroup = svgdoc.createElementNS(NS.SVG, 'svg');
    const lineVertical = svgdoc.createElementNS(NS.SVG, 'line');
    const lineHorizontal = svgdoc.createElementNS(NS.SVG, 'line');

    svgedit.utilities.assignAttributes(linesGroup, {
      id: 'guidesLines',
      width: '100%',
      height: '100%',
      x: 0,
      y: 0,
      viewBox: `0 0 ${Constant.dimension.getWidth(BeamboxPreference.read('model'))} ${Constant.dimension.getHeight(BeamboxPreference.read('model'))}`,
      style: 'pointer-events: none',
    });

    svgedit.utilities.assignAttributes(lineHorizontal, {
      id: 'horizontal_guide',
      x1: 0,
      x2: Constant.dimension.getWidth(BeamboxPreference.read('model')),
      y1: BeamboxPreference.read('guide_y0') * 10,
      y2: BeamboxPreference.read('guide_y0') * 10,
      stroke: '#000',
      'stroke-width': '2',
      'stroke-opacity': 0.8,
      'stroke-dasharray': '5, 5',
      'vector-effect': 'non-scaling-stroke',
      fill: 'none',
      style: 'pointer-events:none',
    });

    svgedit.utilities.assignAttributes(lineVertical, {
      id: 'vertical_guide',
      x1: BeamboxPreference.read('guide_x0') * 10,
      x2: BeamboxPreference.read('guide_x0') * 10,
      y1: 0,
      y2: Constant.dimension.getHeight(BeamboxPreference.read('model')),
      stroke: '#000',
      'stroke-width': '2',
      'stroke-opacity': 0.8,
      'stroke-dasharray': '5, 5',
      'vector-effect': 'non-scaling-stroke',
      fill: 'none',
      style: 'pointer-events:none',
    });

    linesGroup.appendChild(lineHorizontal);
    linesGroup.appendChild(lineVertical);
    return linesGroup;
  })();
  const canvasBG = document.getElementById('canvasBackground');
  if (canvasBG) {
    canvasBG.appendChild(guidesLines);
  }
};

const initDefaultFont = () => {
  const lang = navigator.language;
  const { os } = window;
  const FontScanner = requireNode('font-scanner');
  const config = Config();
  let defaultFontFamily = os === 'Linux' ? 'Ubuntu' : 'Arial';
  if (FontConstants[lang] && FontConstants[lang][os]) {
    defaultFontFamily = FontConstants[lang][os];
  }
  const fonts = FontScanner.findFontsSync({ family: defaultFontFamily });
  if (fonts.length > 0) {
    const defaultFont: IFont = fonts.filter((font) => font.style === 'Regular')[0] || fonts[0];
    config.write('default-font', {
      family: defaultFont.family,
      postscriptName: defaultFont.postscriptName,
      style: defaultFont.style,
    });
  }
};

const initMenuBarEvents = (): void => {
  const LANG = i18n.lang;
  const electron = requireNode('electron');
  const ipc = electron.ipcRenderer;

  const getLog = async (printer, log: string) => {
    try {
      const res = await DeviceMaster.select(printer);
      if (res.success) {
        Progress.openSteppingProgress({ id: 'get_log', message: 'downloading' });
        try {
          const file = await DeviceMaster.downloadLog(log,
            async (progress: { completed: number, size: number }) => {
              Progress.update('get_log', { message: 'downloading', percentage: (progress.completed / progress.size) * 100 });
            });
          Progress.popById('get_log');
          const targetFilePath = await ElectronDialogs.saveFileDialog(log, log, [{ extensionName: 'log', extensions: ['log'] }]);

          if (targetFilePath) {
            const fs = requireNode('fs');
            const arrBuf = await new Response(file[1]).arrayBuffer();
            const buf = Buffer.from(arrBuf);
            fs.writeFileSync(targetFilePath, buf);
          }
        } catch (errorData) {
          Progress.popById('get_log');
          const msg = errorData === 'canceled'
            ? LANG.topmenu.device.download_log_canceled : LANG.topmenu.device.download_log_error;
          Alert.popUp({
            type: AlertConstants.SHOW_POPUP_INFO,
            message: msg,
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const executeFirmwareUpdate = async (printer, type) => {
    const currentPrinter = printer;
    const updateFirmware = async () => {
      try {
        const response = await checkFirmware(currentPrinter, type);
        const latestVersion = currentPrinter.version;
        const { caption, message } = LANG.update.firmware.latest_firmware;

        if (!response.needUpdate) {
          Alert.popUp({
            id: 'latest-firmware',
            message: `${message} (v${latestVersion})`,
            caption,
            buttonType: AlertConstants.CUSTOM_CANCEL,
            buttonLabels: LANG.update.firmware.latest_firmware.still_update,
            callbacks: () => {
              firmwareUpdater(response, currentPrinter, type, true);
            },
            onCancel: () => {
            },
          });
        } else {
          firmwareUpdater(response, currentPrinter, type);
        }
      } catch (error) {
        Alert.popUp({
          id: 'cant-get-latest-firmware',
          type: AlertConstants.SHOW_POPUP_ERROR,
          message: LANG.update.firmware.latest_firmware.cant_get_latest,
        });
      }
    };
    const checkStatus = () => {
      const handleYes = (id) => {
        if (id === 'head-missing') {
          updateFirmware();
        }
      };
      const handleCancel = (id) => {
        if (id === 'head-missing') {
          AlertStore.removeYesListener(handleYes);
          AlertStore.removeCancelListener(handleCancel);
          DeviceMaster.endMaintainMode();
        }
      };
      AlertStore.onRetry(handleYes);
      AlertStore.onCancel(handleCancel);

      Progress.openNonstopProgress({ id: 'check-status', caption: LANG.update.preparing });
      if (type === 'toolhead') {
        DeviceMaster.enterMaintainMode().then(() => {
          setTimeout(() => {
            Progress.popById('check-status');
            updateFirmware();
          }, 3000);
        });
      } else {
        Progress.popById('check-status');
        updateFirmware();
      }
    };
    // TODO: Handle the error better (output eresp)
    try {
      const res = await DeviceMaster.select(printer);
      if (res.success) {
        checkStatus();
      }
    } catch (resp) {
      console.error(resp);
      Alert.popUp({
        id: 'exec-fw-update',
        type: AlertConstants.SHOW_POPUP_ERROR,
        message: resp,
      });
    }
  };

  const registerAllDeviceMenuClickEvents = () => {
    menuEventRegistered = true;

    ipc.on('MENU_CLICK', (e, menuItem) => {
      const actions: { [key: string]: ((deivce?: IDeviceInfo) => void) } = {};
      const { lang } = i18n;

      actions.DASHBOARD = async (device) => {
        const res = await DeviceMaster.select(device);
        if (res.success) {
          MonitorController.showMonitor(device, device.st_id <= 0 ? Mode.FILE : Mode.WORKING);
        }
      };

      actions.MACHINE_INFO = (device) => {
        const info = `${lang.device.model_name}: ${device.model.toUpperCase()}\n${lang.device.IP}: ${device.ipaddr}\n${lang.device.serial_number}: ${device.serial}\n${lang.device.firmware_version}: ${device.version}\n${lang.device.UUID}: ${device.uuid}`;
        Alert.popUp({
          id: 'machine-info',
          type: AlertConstants.SHOW_POPUP_INFO,
          caption: device.name,
          message: info,
          buttonLabels: [lang.topmenu.device.network_test, lang.topmenu.ok],
          callbacks: [
            () => Dialog.showNetworkTestingPanel(device.ipaddr),
            () => { },
          ],
          primaryButtonIndex: 1,
        });
      };

      const calibrateCamera = async (device: IDeviceInfo, isBorderless: boolean) => {
        try {
          const deviceStatus = await checkDeviceStatus(device);
          if (!deviceStatus) {
            return;
          }
          const res = await DeviceMaster.select(device);
          if (res.success) {
            showCameraCalibration(device, isBorderless);
          }
        } catch (error) {
          console.error(error);
        }
      };

      actions.CALIBRATE_BEAMBOX_CAMERA = async (device) => {
        if (window.location.hash !== '#studio/beambox') {
          Alert.popUp({
            type: AlertConstants.SHOW_POPUP_INFO,
            message: lang.camera_calibration.please_goto_beambox_first,
          });
          return;
        }
        calibrateCamera(device, false);
      };

      actions.CALIBRATE_BEAMBOX_CAMERA_BORDERLESS = async (device) => {
        if (window.location.hash !== '#studio/beambox') {
          Alert.popUp({
            type: AlertConstants.SHOW_POPUP_INFO,
            message: lang.camera_calibration.please_goto_beambox_first,
          });
          return;
        }
        const vc = VersionChecker(device.version);
        const isAvailableVersion = vc.meetRequirement('BORDERLESS_MODE');
        if (isAvailableVersion) {
          calibrateCamera(device, true);
        } else {
          const message = `${lang.camera_calibration.update_firmware_msg1} 2.5.1 ${lang.camera_calibration.update_firmware_msg2}`;
          Alert.popUp({
            type: AlertConstants.SHOW_POPUP_INFO,
            message,
          });
        }
      };

      actions.CALIBRATE_DIODE_MODULE = async (device) => {
        if (window.location.hash !== '#studio/beambox') {
          Alert.popUp({
            type: AlertConstants.SHOW_POPUP_INFO,
            message: lang.camera_calibration.please_goto_beambox_first,
          });
          return;
        }
        const vc = VersionChecker(device.version);
        const diodeAvailable = vc.meetRequirement('DIODE_AND_AUTOFOCUS');
        if (diodeAvailable) {
          try {
            const res = await DeviceMaster.select(device);
            if (res.success) {
              showDiodeCalibration(device);
            }
          } catch (error) {
            console.error(error);
          }
        } else {
          const message = `${lang.diode_calibration.update_firmware_msg1} 3.0.0 ${lang.diode_calibration.update_firmware_msg2}`;
          Alert.popUp({
            type: AlertConstants.SHOW_POPUP_INFO,
            message,
          });
        }
      };

      actions.UPDATE_FIRMWARE = async (device) => {
        const deviceStatus = await checkDeviceStatus(device);
        if (deviceStatus) {
          executeFirmwareUpdate(device, 'firmware');
        }
      };

      actions.UPDATE_TOOLHEAD = async () => {
        console.error('update toolhead function has been removed, \nUse flux studio');
      };

      actions.LOG_NETWORK = (device) => {
        getLog(device, 'fluxnetworkd.log');
      };

      actions.LOG_HARDWARE = (device) => {
        getLog(device, 'fluxhald.log');
      };

      actions.LOG_DISCOVER = (device) => {
        getLog(device, 'fluxupnpd.log');
      };

      actions.LOG_USB = (device) => {
        getLog(device, 'fluxusbd.log');
      };

      actions.LOG_USBLIST = async (device) => {
        const res = await DeviceMaster.select(device);
        if (res.success) {
          const data = await DeviceMaster.lsusb();
          Alert.popUp({
            type: AlertConstants.SHOW_POPUP_INFO,
            message: data.usbs.join('\n'),
            caption: lang.topmenu.device.log.usblist,
          });
        }
      };

      actions.LOG_CAMERA = (device) => {
        getLog(device, 'fluxcamerad.log');
      };

      actions.LOG_CLOUD = (device) => {
        getLog(device, 'fluxcloudd.log');
      };

      actions.LOG_PLAYER = (device) => {
        const vc = VersionChecker(device.version);
        if (vc.meetRequirement('NEW_PLAYER')) {
          getLog(device, 'playerd.log');
        } else {
          getLog(device, 'fluxplayerd.log');
        }
      };

      actions.LOG_ROBOT = (device) => {
        getLog(device, 'fluxrobotd.log');
      };

      // _action.SET_AS_DEFAULT = (device) => {
      //     InitializeMachine.defaultPrinter.clear();
      //     InitializeMachine.defaultPrinter.set(device);
      //     ipc.send('SET_AS_DEFAULT', device);
      // };

      actions.BUG_REPORT = () => {
        OutputError.downloadErrorLog();
      };

      if (typeof actions[menuItem.id] === 'function') {
        if (['SIGN_IN', 'SIGN_OUT', 'MY_ACCOUNT', 'BUG_REPORT'].includes(menuItem.id)) {
          actions[menuItem.id]();
        } else {
          const callback = {
            timeout: 20000,
            onSuccess: (device) => actions[menuItem.id](device),
            onTimeout: () => console.log('select device timeout'),
          };

          DeviceMaster.getDeviceBySerial(menuItem.serial, callback);
        }
      }
    });
  };

  if (!menuEventRegistered) {
    registerAllDeviceMenuClickEvents();
  }
};

const showStartUpDialogs = async (): Promise<void> => {
  await askAndInitSentry();
  const isNewUser = storage.get('new-user');
  if (isNewUser) {
    if (await askFirstTimeCameraCalibration()) {
      await doFirstTimeCameraCalibration();
    } else {
      await onCameraCalibrationSkipped();
    }
  }
  await showTutorial(isNewUser);
  if (!isNewUser) {
    const lastInstalledVersion = storage.get('last-installed-version');
    // eslint-disable-next-line @typescript-eslint/dot-notation
    if (window['FLUX'].version !== lastInstalledVersion) {
      await showChangeLog();
    }
    await showQuestionnaire();
  }
  checkOSVersion();
  storage.removeAt('new-user');
  // eslint-disable-next-line @typescript-eslint/dot-notation
  storage.set('last-installed-version', window['FLUX'].version);
};

const askAndInitSentry = async () => {
  if (storage.get('enable-sentry') === undefined) {
    await new Promise<void>((resolve) => {
      const LANG = i18n.lang;
      Alert.popUp({
        id: 'ask-sentry',
        caption: LANG.beambox.popup.sentry.title,
        iconUrl: 'img/beambox/icon-analyze.svg',
        message: LANG.beambox.popup.sentry.message,
        buttonType: AlertConstants.YES_NO,
        onYes: () => {
          storage.set('enable-sentry', 1);
          sentryHelper.initSentry();
          resolve();
        },
        onNo: () => {
          storage.set('enable-sentry', 0);
          resolve();
        },
      });
    });
  }
};

const askFirstTimeCameraCalibration = () => new Promise((resolve) => {
  Alert.popUp({
    caption: i18n.lang.tutorial.welcome,
    message: i18n.lang.tutorial.suggest_calibrate_camera_first,
    buttonType: AlertConstants.YES_NO,
    onNo: () => resolve(false),
    onYes: () => resolve(true),
  });
});

const onCameraCalibrationSkipped = () => new Promise((resolve) => {
  Alert.popUp({
    message: i18n.lang.tutorial.skipped_camera_calibration,
    callbacks: resolve,
  });
});

const doFirstTimeCameraCalibration = async () => {
  const LANG = i18n.lang.tutorial;
  const askForRetry = () => new Promise((resolve) => {
    Alert.popUp({
      caption: LANG.camera_calibration_failed,
      message: LANG.ask_retry_calibration,
      buttonType: AlertConstants.YES_NO,
      onYes: async () => resolve(await doFirstTimeCameraCalibration()),
      onNo: async () => resolve(await onCameraCalibrationSkipped()),
    });
  });

  const device = await Dialog.selectDevice();
  if (!device) {
    await onCameraCalibrationSkipped();
    return;
  }
  try {
    const deviceStatus = await checkDeviceStatus(device);
    if (!deviceStatus) {
      await onCameraCalibrationSkipped();
      return;
    }
    const selectRes = await DeviceMaster.select(device);
    if (selectRes.success) {
      const caliRes = await showCameraCalibration(device, false);
      if (!caliRes) {
        await onCameraCalibrationSkipped();
      }
      return;
    }
    await askForRetry();
  } catch (e) {
    console.error(e);
    await askForRetry();
  }
};

const showTutorial = (isNewUser: boolean): Promise<void> => {
  if (!AlertConfig.read('skip-interface-tutorial')) {
    const LANG = i18n.lang.tutorial;
    return new Promise<void>((resolve) => {
      Alert.popUp({
        id: 'ask-tutorial',
        caption: LANG.welcome,
        message: isNewUser ? LANG.needNewUserTutorial : LANG.needNewInterfaceTutorial,
        buttonType: AlertConstants.YES_NO,
        onYes: () => {
          const tutorialCallback = () => {
            AlertConfig.write('skip-interface-tutorial', true);
            Alert.popUp({
              message: LANG.tutorial_complete,
              callbacks: () => resolve(),
            });
          };
          if (isNewUser) {
            Tutorials.startNewUserTutorial(tutorialCallback);
          } else {
            Tutorials.startInterfaceTutorial(tutorialCallback);
          }
        },
        onNo: () => {
          AlertConfig.write('skip-interface-tutorial', true);
          if (isNewUser) {
            Alert.popUp({
              message: LANG.skip_tutorial,
              callbacks: () => resolve(),
            });
          } else {
            resolve();
          }
        },
      });
    });
  }
  return null;
};

const showChangeLog = () => new Promise<void>((resolve) => {
  Dialog.showChangLog({ callback: resolve });
});

const showQuestionnaire = async () => {
  const lastQuestionnaireVersion = storage.get('questionnaire-version') || 0;
  const res = await checkQuestionnaire();
  console.log(res, lastQuestionnaireVersion);

  if (!res || res.version <= lastQuestionnaireVersion) return null;

  let url: string;
  if (res.urls) {
    url = res.urls[i18n.getActiveLang()] || res.urls.en;
  }
  if (!url) return null;

  storage.set('questionnaire-version', res.version);

  return new Promise<void>((resolve) => {
    Alert.popUp({
      id: 'qustionnaire',
      caption: i18n.lang.beambox.popup.questionnaire.caption,
      message: i18n.lang.beambox.popup.questionnaire.message,
      iconUrl: 'img/beambox/icon-questionnaire.svg',
      buttonType: AlertConstants.YES_NO,
      onYes: () => {
        const electron = requireNode('electron');
        electron.remote.shell.openExternal(url);
        resolve();
      },
      onNo: () => {
        resolve();
      },
    });
  });
};

const checkOSVersion = (): void => {
  const LANG = i18n.lang.beambox;
  if (!AlertConfig.read('skip_os_version_warning')) {
    if (window.os === 'MacOS') {
      try {
        const osVersion = /(?<=Mac OS X )[._\d]+/.exec(navigator.userAgent)[0];
        const version = osVersion.split('_').map((v) => parseInt(v, 10));
        if (version[0] === 10 && version[1] < 13) {
          Alert.popUp({
            id: 'os_version_warning',
            message: sprintf(i18n.lang.message.unsupport_osx_version, osVersion),
            type: AlertConstants.SHOW_POPUP_WARNING,
            checkbox: {
              text: LANG.popup.dont_show_again,
              callbacks: () => AlertConfig.write('skip_os_version_warning', true),
            },
          });
        }
      } catch (e) {
        console.error('Fail to get MacOS Version');
      }
    } else if (window.os === 'Windows') {
      const windowsVersionStrings = [
        { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/, shouldAlert: false },
        { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/, shouldAlert: true },
        { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/, shouldAlert: true },
        { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/, shouldAlert: true },
        { s: 'Windows Vista', r: /Windows NT 6.0/, shouldAlert: true },
        { s: 'Windows Server 2003', r: /Windows NT 5.2/, shouldAlert: true },
        { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/, shouldAlert: true },
        { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/, shouldAlert: true },
        { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/, shouldAlert: true },
        { s: 'Windows 98', r: /(Windows 98|Win98)/, shouldAlert: true },
        { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/, shouldAlert: true },
        { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT)/, shouldAlert: true },
        { s: 'Windows CE', r: /Windows CE/, shouldAlert: true },
        { s: 'Windows 3.11', r: /Win16/, shouldAlert: true },
      ];
      let shouldAlert = false;
      let osVersion;
      for (let i = 0; i < windowsVersionStrings.length; i += 1) {
        const versionString = windowsVersionStrings[i];
        if (versionString.r.test(navigator.userAgent)) {
          osVersion = versionString.s;
          shouldAlert = versionString.shouldAlert;
          break;
        }
      }
      if (shouldAlert) {
        Alert.popUp({
          id: 'os_version_warning',
          message: sprintf(i18n.lang.message.unsupport_win_version, osVersion),
          type: AlertConstants.SHOW_POPUP_WARNING,
          checkbox: {
            text: LANG.popup.dont_show_again,
            callbacks: () => AlertConfig.write('skip_os_version_warning', true),
          },
        });
      }
    }
  }
};

export default {
  init,
  initMenuBarEvents,
  showStartUpDialogs,
  showTutorial,
  checkOSVersion,
};
