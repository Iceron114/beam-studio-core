import { ILang } from 'interfaces/ILang';

export default {
  general: {
    wait: '処理中です、お待ちください',
    choose_folder: 'フォルダーの選択',
  },
  buttons: {
    next: '次へ',
  },
  topbar: {
    untitled: '無題',
    titles: {
      settings: '環境設定',
    },
    export: 'ゴー',
    preview: 'プレビュー',
    borderless: '（ボーダーレス）',
    tag_names: {
      rect: '矩形',
      ellipse: '楕円',
      path: 'パス',
      polygon: 'ポリゴン',
      image: 'イメージ',
      text: 'テキスト',
      line: 'ライン',
      g: 'グループ',
      multi_select: '複数オブジェクト',
      use: 'インポートされたオブジェクト',
      svg: 'SVGオブジェクト',
      dxf: 'DXFオブジェクト',
    },
    alerts: {
      start_preview_timeout: '#803 プレビューモードの開始時にタイムアウトが発生しました。マシンまたはBeam Studioを再起動してください。このエラーが続く場合は、この<a target="_blank" href="https://flux3dp.zendesk.com/hc/en-us/articles/360001111355">ガイド</a>に従ってください。',
      fail_to_start_preview: '#803 プレビューモードを開始できません。マシンまたはBeam Studioを再起動してください。このエラーが続く場合は、この<a target="_blank" href="https://flux3dp.zendesk.com/hc/en-us/articles/360001111355">ガイド</a>に従ってください。',
      fail_to_connect_with_camera: '#803 マシンカメラとの接続を確立できませんでした。マシンまたはBeam Studioを再起動してください。このエラーが続く場合は、この<a target="_blank" href="https://flux3dp.zendesk.com/hc/en-us/articles/360001111355">ガイド</a>に従ってください。',
      power_too_high: 'パワーが高すぎる',
      power_too_high_msg: 'より低いレーザー出力（70％未満）を使用すると、レーザー管の寿命が延びます。\n「了解」と入力して続行します。',
      power_too_high_confirm: '了解',
    },
    hint: {
      polygon: '+ / - キーを押して、辺を増減します。',
    },
  },
  support: {
    no_webgl: 'WebGLはサポートされていません。他のデバイスを使用してください。',
    no_vcredist: '「Visual C++ Redistributable 2015」をインストールしてください。<br/>それはflux3dp.comでダウンロードできます',
  },
  generic_error: {
    UNKNOWN_ERROR: '[UE] Beam Studioを再起動してください',
    OPERATION_ERROR: '[OE] ステータスの競合が発生しました。アクションを再試行してください。',
    SUBSYSTEM_ERROR: '[SE] マシンファームウェアがタスクを実行しているときにエラーが発生しました。マシンを再起動してください',
    UNKNOWN_COMMAND: '[UC] 「マシンファームウェア」をアップデートしてください',
    RESOURCE_BUSY: '[RB] マシンを再起動するか、再試行してください',
  },
  device_selection: {
    no_beambox: '#801 お使いのマシンがネットワーク上で見つかりません。\n<a target="_blank" href="https://support.flux3dp.com/hc/en-us/articles/360001683556">このガイド</a>に従って、接続の問題をトラブルシューティングしてください。',
  },
  update: {
    release_note: 'リリースノート：',
    firmware: {
      caption: 'このマシンのファームウェアアップデートがご利用いただけます',
      message_pattern_1: '「%s」は現在、ファームウェアアップデートの準備ができています。',
      message_pattern_2: '%sファームウェアv%sは現在ご利用いただけます - v%sがあります。',
      latest_firmware: {
        caption: 'マシンのファームウェアアップデート',
        message: 'あなたは最新のマシンファームウェアを使用しています',
        still_update: 'アップデート',
        cant_get_latest: '最新のファームウェアの情報を取得できません。',
      },
      confirm: 'アップロード',
      upload_file: 'ファームウェアのアップロード（*.bin / *.fxfw）',
      update_success: 'ファームウェアアップデートが正常にアップロードされました',
      update_fail: '#822 アップデート失敗',
    },
    software: {
      checking: 'アップデートの確認中',
      switch_version: 'バージョンを切り替える',
      check_update: 'アップデートを確認',
      caption: 'Beam Studioのソフトウェアアップデートがご利用いただけます',
      downloading: 'アップデートのダウンロード中…',
      install_or_not: 'アップデートがダウンロードされました。今すぐ再起動してインストールしますか？',
      switch_or_not: 'がダウンロードされました。今すぐ再起動してインストールしますか？',
      available_update: 'Beam Studio v%s が現在、ご利用いただけます\nv%sがあります。\nアップデートをダウンロードしますか？',
      available_switch: 'Beam Studio v%s が現在、ご利用いただけます\nv%sがあります。\nこのバージョンを切り替えますか？',
      not_found: 'あなたは、最新バージョンのBeam Studioを使用しています。',
      no_response: 'サーバーに接続できませんでした。ネットワーク設定を確認してください。',
      switch_version_not_found: '切り替えられるバージョンが見つかりません',
      yes: 'はい',
      no: 'いいえ',
    },
    updating: 'アップデート中…',
    skip: 'このバージョンをスキップ',
    preparing: '準備中…',
    later: '後で',
    download: 'オンラインアップデート',
    cannot_reach_internet: '#823 サーバーにアクセスできません。<br/>インターネット接続を確認してください',
    install: 'インストール',
    upload: 'アップロード',
  },
  topmenu: {
    version: 'バージョン',
    ok: 'OK',
    file: {
      label: 'ファイル',
      import: 'インポート',
      save_fcode: 'FLUXタスクをエクスポート',
      save_scene: 'シーンを保存',
      save_svg: 'SVGをエクスポート',
      save_png: 'PNGをエクスポート',
      save_jpg: 'JPGをエクスポート',
      converting: '画像に変換中…',
      all_files: 'すべてのファイル',
      svg_files: 'SVG',
      png_files: 'PNG',
      jpg_files: 'JPG',
      scene_files: 'Beam Studioシーン',
      fcode_files: 'FLUXコード',
      clear_recent: '最近開いた項目をクリア',
      path_not_exit: 'このパスは、デスク上にもう存在しないようです。',
    },
    device: {
      download_log_canceled: 'ログのダウンロードをキャンセルしました',
      download_log_error: '不明なエラーが発生しました。後で再試行してください',
      log: {
        usblist: 'USBリスト',
      },
      network_test: 'ネットワークをテスト',
    },
  },
  initialize: {
    // generic strings
    next: '次へ',
    start: '開始',
    skip: 'スキップ',
    cancel: 'キャンセル',
    confirm: '確認する',
    connect: '接続する',
    back: '戻る',
    retry: '再試行する',
    no_machine: '私は今マシンを持っていません。',

    // specific caption/content
    select_language: '言語を選択',
    select_machine_type: 'マシンを選択してください',
    select_connection_type: 'どのように接続しますか',
    connection_types: {
      wifi: 'Wi-Fi',
      wired: '有線ネットワーク',
      ether2ether: '直接接続',
    },
    connect_wifi: {
      title: 'Wi-Fiで接続する',
      tutorial1: '1. タッチパネル > [インターネット]> [WiFi 設定] をクリックしてください。',
      tutorial2: '2. 使用したい Wi-Fi を選択して接続します。',
      what_if_1: '接続したい Wi-Fi が見えません',
      what_if_1_content: '1. Wi-Fi 暗号化モードは WPA2 またはパスワードなしである必要があります。\n2. 暗号化モードは、 Wi-Fi ルーターの管理インターフェイスで設定できます。ルーターが WPA2 をサポートしておらず、適切なルーターの選択についてサポートが必要な場合は、 FLUX サポートにお問い合わせください。',
      what_if_2: 'Wi-Fi が見えません',
      what_if_2_content: '1. Wi-Fi ドングルが完全に差し込まれていることを確認してください。\n2. タッチパネルに無線接続の MAC アドレスがない場合は、 FLUX サポートに連絡してください。\n3. Wi-Fi チャネルは 2.4Ghz である必要があります（ 5Ghz はサポートされていません）。',
    },
    connect_wired: {
      title: '有線ネットワークで接続する',
      tutorial1: '1. マシンをルーターに接続する.',
      tutorial2: '2. 「インターネット」を押して有線ネットワークIPを取得します。',
      what_if_1: 'IP が空の場合',
      what_if_1_content: '1. イーサネットケーブルが完全に差し込まれていることを確認します。\n2. タッチパネルに有線接続の MAC アドレスがない場合は、 FLUX サポートに連絡してください。',
      what_if_2: 'IP が 169 で始まる場合',
      what_if_2_content: '1. IP アドレスが 169.254 で始まる場合は、 DHCP 設定の問題であるはずです。詳細については、ISP（インターネットサービスプロバイダー）にお問い合わせください。\n2. コンピューターが PPPoE を使用して直接インターネットに接続している場合は、ルーターを使用して PPPoE を使用して接続し、ルーターで DHCP 機能を有効にしてください。',
    },
    connect_ethernet: {
      title: '直接接続',
      tutorial1: '1. イーサネットケーブルでマシンをコンピュータに接続してください。',
      tutorial2_1: '2. この',
      tutorial2_a_text: 'ガイド',
      tutorial2_a_href_mac: 'https://support.flux3dp.com/hc/en-us/articles/360001517076',
      tutorial2_a_href_win: 'https://support.flux3dp.com/hc/en-us/articles/360001507715',
      tutorial2_2: 'に従ってコンピュータをルーターにしてください。',
      tutorial3: '3. 「次へ」をクリックしてください。',
    },
    connect_machine_ip: {
      enter_ip: 'マシン IP を入力してください',
      check_ip: 'IP 可用性の確認しています',
      invalid_ip: 'IPが無効です：',
      invalid_format: '無効な形式',
      starts_with_169254: '169.254で始まる',
      unreachable: 'IP 到達不能',
      check_connection: 'マシン接続の確認しています',
      check_firmware: 'ファームウェアバージョンの確認しています',
      check_camera: 'カメラの可用性を確認しています',
      retry: '再試行',
      finish_setting: '設定完了',
    },
    connecting: '接続中…',
    setting_completed: {
      start: '開始',
      great: 'Beam Studioへようこそ',
      setup_later: 'タイトルバ >「マシン」>「マシン設定」からいつでもマシンをセットアップできます。',
      back: '戻る',
      ok: '作成を開始',
    },
  },
  menu: {
    mm: 'mm',
    inches: 'インチ',
  },
  settings: {
    on: 'オン',
    off: 'オフ',
    low: '低',
    high: '普通',
    caption: '設定',
    tabs: {
      general: '一般',
      device: 'マシン',
    },
    ip: 'マシンIPアドレス',
    guess_poke: 'マシンIPを自動的に検索',
    auto_connect: '自動的に唯一のマシンを選択する',
    wrong_ip_format: '間違ったIP形式',
    default_machine: 'デフォルトマシン',
    default_machine_button: '空いている',
    remove_default_machine_button: '削除する',
    confirm_remove_default: 'デフォルトマシンが削除されます。',
    reset: 'Beam Studioをリセット',
    reset_now: 'Beam Studioをリセット',
    confirm_reset: 'Beam Studioのリセットを確認しますか？',
    language: '言語',
    notifications: 'デスクトップ通知',
    check_updates: '自動チェック',
    autosave_enabled: '自動保存',
    autosave_path: '自動保存位置',
    autosave_interval: '保存間隔',
    autosave_number: '自動保存の数',
    autosave_path_not_correct: '指定されたパスが見つかりません',
    preview_movement_speed: 'プレビューの移動速度',
    preview_movement_speed_hl: 'プレビューの移動速度（ハイブリッドレーザー対応）',
    default_units: 'デフォルト単位',
    default_font_family: 'デフォルトのフォント',
    default_font_style: 'デフォルトのフォントスタイル',
    fast_gradient: '速度の最適化',
    vector_speed_constraint: '速度制限（20mm/s）',
    loop_compensation: 'ループ補正',
    blade_radius: 'Blade Radius',
    blade_precut_switch: 'Blade Precut',
    blade_precut_position: 'Precut Position',
    default_beambox_model: 'デフォルト作業エリア',
    guides_origin: 'ガイドの原点',
    guides: 'ガイド',
    image_downsampling: 'ビットマップのプレビュー品質',
    continuous_drawing: '連続描画',
    trace_output: 'ベクトル化/トレース画像出力',
    single_object: '単一のオブジェクト',
    grouped_objects: 'グループ化されたオブジェクト',
    simplify_clipper_path: '計算されたパスを最適化',
    mask: 'ワークエリアのクリッピング',
    text_path_calc_optimization: 'パス計算の最適化',
    font_substitute: 'サポートされていない文字を置き換える',
    default_borderless_mode: 'オープンボトム既定',
    default_enable_autofocus_module: 'オートフォーカス既定',
    default_enable_diode_module: 'ハイブリッドレーザー既定',
    diode_offset: 'ハイブリッドレーザーオフセット',
    share_with_flux: 'Beam Studio Analyticsを共有する',
    none: 'なし',
    close: '閉じる',
    enabled: '有効',
    disabled: '無効',
    cancel: 'キャンセル',
    done: '適用する',
    groups: {
      general: '一般',
      update: 'ソフトウェア更新',
      connection: '接続',
      autosave: '自動保存',
      camera: 'カメラ',
      editor: 'エディター',
      path: 'パス（線分）',
      engraving: '彫刻（スキャン）',
      mask: 'ワークエリアのクリッピング',
      text_to_path: 'テキスト',
      modules: '拡張機能',
      privacy: 'プライバシー',
    },
    notification_on: 'オン',
    notification_off: 'オフ',
    update_latest: '最新',
    update_beta: 'ベータ',
  },
  beambox: {
    tag: {
      g: 'グループ',
      use: 'Import Svg',
      image: '画像',
      text: 'テキスト',
    },
    context_menu: {
      cut: '切り取り',
      copy: 'コピー',
      paste: '貼り付け',
      paste_in_place: '所定の位置に貼り付け',
      delete: '削除',
      group: 'グループ化',
      ungroup: 'グループ化解除',
      move_front: '最前に持ってくる',
      move_up: '前に持ってくる',
      move_down: '後に送る',
      move_back: '最後に送る',
    },
    popup: {
      select_import_method: '積層スタイルを選択：',
      touchpad: 'タッチパッド',
      mouse: 'マウス',
      layer_by_layer: '層',
      layer_by_color: '色',
      nolayer: '単一層',
      loading_image: '画像を読み込んでいます。お待ちください…',
      no_support_text: 'Beam Studioは現在、テキストタグをサポートしていません。インポートする前にテキストをパスに変換してください。',
      speed_too_high_lower_the_quality: 'この解像度で速すぎる速度を使用すると、シェーディング彫刻の品質が低下する場合があります。',
      both_power_and_speed_too_high: 'より低いレーザー出力を使用すると、レーザー管の寿命が延びます。\nまた、この解像度で速度が速すぎると、シェーディング彫刻の品質が低下する場合があります。',
      too_fast_for_path: 'パスオブジェクトを含む層で速すぎる速度を使用すると、切断時に精度が低下する場合があります。\n切断時に 20mm/s より速い速度を使用することはお勧めしません。',
      too_fast_for_path_and_constrain: '次のレイヤー：％s \nベクトルパスオブジェクトが含まれていて、速度が 20mm/sを超えています。\nベクトルパスオブジェクトの切断速度は 20mm/s に制限されます。\nこの制限は[好み]で削除できます。',
      should_update_firmware_to_continue: '#814 ご使用のファームウェアは、Beam Studioの一部の改善をサポートしていません。パフォーマンスとユーザー体験を向上させるには、ファームウェアをアップデートして続行してください。（メニュー>マシン>[お使いのマシン]>ファームウェアのアップデート',
      more_than_two_object: 'オブジェクトが多すぎます。2つのオブジェクトのみをサポートします',
      not_support_object_type: 'オブジェクトタイプをサポートしていません',
      select_first: '最初にオブジェクトを選択します。',
      select_at_least_two: '2つのオブジェクトを選択して続行します',
      import_file_contain_invalid_path: '#808 インポートされたSVGファイルに無効は画像パスが含まれています。すべての画像ファイルが存在することを確認するか、ファイルに画像を埋め込んでください',
      import_file_error_ask_for_upload: 'インポートされたSVGファイルに失敗しました。バグレポート用のチームを開発するためのファイルを提供してもよろしいですか？',
      upload_file_too_large: '#819 ファイルが大きすぎてアップロードできません。',
      successfully_uploaded: 'ファイルのアップロードに成功しました。',
      upload_failed: '#819 ファイルのアップロードに失敗しました。',
      or_turn_off_borderless_mode: ' または、ボーダーレスモードをオフにします。',
      svg_1_1_waring: 'このSVGファイルのバージョンはv 1.1です。非互換性の問題が発生する可能性があります。',
      svg_image_path_waring: 'このSVGファイルには、ファイルパスからロードされた<image>が含まれています。ロード時に失敗する可能性があります。\nこの可能性を回避するには、SVGをエクスポートするときに埋め込み画像（embed）を使用してください。',
      dxf_version_waring: 'このDXFファイルのバージョンは2013ではありません。非互換性の問題が発生する可能性があります。',
      dont_show_again: '次回から表示しない',
      convert_to_path_fail: 'パスへの変換に失敗しました。',
      save_unsave_changed: '未保存の変更を保存しますか？',
      dxf_bounding_box_size_over: '図面サイズがワークエリア外です。図面をCADソフトウェアの原点に近づけるか、単位が正しく設定されていることを確認してください。',
      progress: {
        uploading: 'アップロード中',
        calculating: '計算中',
      },
      backend_connect_failed_ask_to_upload: '#802 バックエンドに接続しようとすると、エラーが発生し続けます。バグレポートログをアップロードしますか？',
      pdf2svg: {
        error_when_converting_pdf: '#824 エラー：PDFをSVGに変換するときのエラー：',
        error_pdf2svg_not_found: '#825 エラー：コマンド pdf2svg が見つかりません。パッケージマネージャーで pdf2svg をインストールしてください（例："yum install pdf2svg" or "apt-get install pdf2svg"）。',
      },
      ungroup_use: 'これにより、インポートされた DXF または SVG がグループ解除されます。ファイルには大量の要素が含まれている可能性があるため、グループ解除に時間がかかる場合があります。続行してもよろしいですか？',
      vectorize_shading_image: 'シェーディング画像はベクトル化に時間がかかり、ノイズが発生しやすくなります。実行する前に画像のシェーディングをオフにしてください。',
      change_workarea_before_preview: '%sのワークエリアが、現在設定されているワークエリアと一致しません。現在のワークエリアを切り替えますか？',
      bug_report: 'バグ報告',
      sentry: {
        title: '一緒にBeamStudioをもっと良くしましょう',
        message: 'エラーが発生したときに、関連情報を開発チームに自動的にアップロードすることに同意しますか？',
      },
      questionnaire: {
        caption: 'アンケートへの記入にご協力ください',
        message: 'Beam Studioを改善するために、アンケートへの記入にご協力ください。',
        unable_to_get_url: 'インターネット経由でアンケートへのリンクを取得できませんでした。インターネット接続を確認してください。',
        no_questionnaire_available: '現在、利用可能なアンケートはありません。',
      },
    },
    zoom_block: {
      fit_to_window: 'ウィンドウに合わせる',
    },
    time_est_button: {
      calculate: '時間を計算',
      estimate_time: '推定所要時間：',
    },
    left_panel: {
      unpreviewable_area: 'ブラインドエリア',
      diode_blind_area: 'ハイブリッドアドオンのブラインドエリア',
      borderless_blind_area: '非彫刻エリア',
      borderless_preview: 'ボーダーレスモードのカメラプレビュー',
      rectangle: '長方形',
      ellipse: '楕円',
      line: 'ライン',
      image: '画像',
      text: 'テキスト',
      label: {
        cursor: '選択する',
        photo: '画像',
        text: 'テキスト',
        line: 'ライン',
        rect: '長方形',
        oval: '楕円形',
        polygon: '多角形',
        pen: 'ペン',
        shapes: '形',
        array: '配列',
        preview: 'カメラプレビュー',
        trace: 'トレース画像',
        end_preview: 'プレビューを終了',
        clear_preview: 'プレビューをクリア',
      },
    },
    right_panel: {
      tabs: {
        layers: 'レイヤ',
        objects: 'オブジェクト',
        path_edit: 'パス編集',
      },
      layer_panel: {
        layer1: 'レイヤ 1',
        layer_bitmap: 'ビットマップ',
        layer_engraving: '彫る',
        layer_cutting: '切る',
        move_elems_to: '移動先レイヤ:',
        notification: {
          dupeLayerName: '同名のレイヤーが既に存在します。',
          newName: '新しい名前',
          enterUniqueLayerName: '新規レイヤの一意な名前を入力してください。',
          enterNewLayerName: 'レイヤの新しい名前を入力してください。',
          layerHasThatName: '既に同名が付いています。',
          QmoveElemsToLayer: '選択した要素をレイヤー \'%s\' に移動しますか？',
        },
        layers: {
          layer: 'レイヤ',
          layers: 'Layers',
          del: 'レイヤの削除',
          move_down: 'レイヤを下へ移動',
          new: '新規レイヤ',
          rename: 'レイヤの名前を変更',
          move_up: 'レイヤを上へ移動',
          dupe: 'レイヤーを複製',
          lock: 'レイヤーをロック',
          merge_down: 'マージダウン',
          merge_all: 'すべてをマージ',
          merge_selected: '選択したレイヤーをマージ',
          move_elems_to: '移動先レイヤ:',
          move_selected: '選択対象を別のレイヤに移動',
        },
      },
      laser_panel: {
        preset_setting: 'パラメータ設定 （%s）',
        multi_layer: '複数のレイヤ',
        parameters: 'パラメーター',
        strength: '出力',
        speed: '速度',
        speed_contrain_warning: 'ベクトルパスオブジェクトの切断速度は 20mm/s に制限されます。この制限は[好み]で削除できます。',
        repeat: '実行',
        add_on: '拡張機能',
        focus_adjustment: 'フォーカスを調整する',
        height: '高さ',
        z_step: 'Z Step',
        diode: 'ダイオードレーザー',
        times: '回',
        cut: 'カット',
        engrave: '彫刻する',
        more: '管理する',
        delete: '削除する',
        reset: 'リセット',
        sure_to_reset: 'これにより、すべてのプリセットがリセットされ、カスタマイズされた構成が保持されます。続行してもよろしいですか？',
        apply: '適用する',
        cancel: 'キャンセル',
        save: '保存する',
        save_and_exit: '保存して終了',
        name: '名前',
        default: 'デフォルト',
        customized: 'カスタマイズされたリスト',
        inuse: '使用中',
        export_config: 'パラメータのエクスポート',
        new_config_name: '新しいパラメータ名',
        sure_to_load_config: 'これにより、プリセットの配置が読み込まれ、ファイルに設定されているカスタマイズされたパラメーターが置き換えられます。続行しますか？',
        custom_preset: 'カスタム',
        various_preset: '複数のプリセット',
        dropdown: {
          parameters: 'パラメーター…',
          save: '現在のパラメーターを追加',
          export: '書き出す',
          import: 'インポート',
          more: '管理する',
          mm: {
            wood_3mm_cutting: '木材 - 3mm 切断',
            wood_5mm_cutting: '木材 - 5mm 切断',
            wood_engraving: '木材 - 彫刻',
            acrylic_3mm_cutting: 'アクリル - 3mm 切断',
            acrylic_5mm_cutting: 'アクリル - 5mm 切断',
            acrylic_engraving: 'アクリル - 彫刻',
            leather_3mm_cutting: 'レザー - 3mm 切断',
            leather_5mm_cutting: 'レザー - 5mm 切断',
            leather_engraving: 'レザー - 彫刻',
            fabric_3mm_cutting: '布地 - 3mm 切断',
            fabric_5mm_cutting: '布地 - 5mm 切断',
            fabric_engraving: '布地 - 彫刻',
            rubber_bw_engraving: 'ゴム - 彫刻',
            glass_bw_engraving: 'ガラス - 彫刻',
            metal_bw_engraving: '金属 - 彫刻',
            stainless_steel_bw_engraving_diode: '金属 - 彫刻 (ダイオードレーザー)',
          },
          inches: {
            wood_3mm_cutting: '木材 - 0.1\'\' 切断',
            wood_5mm_cutting: '木材 - 0.2\'\' 切断',
            wood_engraving: '木材 - 彫刻',
            acrylic_3mm_cutting: 'アクリル - 0.1\'\' 切断',
            acrylic_5mm_cutting: 'アクリル - 0.2\'\' 切断',
            acrylic_engraving: 'アクリル - 彫刻',
            leather_3mm_cutting: 'レザー - 0.1\'\' 切断',
            leather_5mm_cutting: 'レザー - 0.2\'\' 切断',
            leather_engraving: 'レザー - 彫刻',
            fabric_3mm_cutting: '布地 - 0.1\'\' 切断',
            fabric_5mm_cutting: '布地 - 0.2\'\' 切断',
            fabric_engraving: '布地 - 彫刻',
            rubber_bw_engraving: 'ゴム - 彫刻',
            glass_bw_engraving: 'ガラス - 彫刻',
            metal_bw_engraving: '金属 - 彫刻',
            stainless_steel_bw_engraving_diode: '金属 - 彫刻 (ダイオードレーザー)',
          },
        },
        laser_speed: {
          text: 'レーザー速度',
          unit: 'mm/秒',
          fast: '高速',
          slow: '低速',
          min: 3,
          max: 300,
          step: 0.1,
        },
        power: {
          text: '出力',
          high: '高',
          low: '低',
          min: 1,
          max: 100,
          step: 0.1,
        },
        para_in_use: 'このパラメーターは使用中です。',
        do_not_adjust_default_para: 'デフォルトのパラメーターは調整できません。',
        existing_name: 'このパラメーター名は使用されています。',
      },
      object_panel: {
        zoom: 'ズーム',
        group: 'グループ化',
        ungroup: 'グループ化解除',
        hdist: '水平配置',
        vdist: '垂直配置',
        left_align: '左に整列',
        center_align: '中央に整列',
        right_align: '右に整列',
        top_align: '上部に整列',
        middle_align: '中間に整列',
        bottom_align: '下部に整列',
        union: 'ユニオン',
        subtract: '引く',
        intersect: '交差',
        difference: '差',
        hflip: '左右反転',
        vflip: '上下反転',
        option_panel: {
          fill: 'インフィル',
          rounded_corner: '角丸',
          font_family: 'フォント',
          font_style: 'スタイル',
          font_size: 'サイズ',
          letter_spacing: '文字間隔',
          line_spacing: '行間',
          vertical_text: '縦書き',
          shading: 'シェーディング',
          threshold: 'しきい値',
        },
        actions_panel: {
          replace_with: '置き換える',
          trace: 'ベクトル化',
          grading: 'カーブ',
          sharpen: 'シャープ化',
          crop: 'クロップ',
          bevel: '面取りを生成',
          invert: '色を反転',
          convert_to_path: 'パスに変換',
          wait_for_parsing_font: 'フォントの解析中です… 少々お待ちください',
          offset: 'オフセット',
          array: '配列',
          decompose_path: '離散パスを分解する',
          disassemble_use: '逆アセンブル',
          disassembling: '逆アセンブル中...',
          ungrouping: 'グループ解除中...',
        },
        path_edit_panel: {
          node_type: 'ノードタイプ',
        },
      },
    },
    bottom_right_panel: {
      convert_text_to_path_before_export: 'テキストをパスに変換…',
      retreive_image_data: '画像データを読み出す…',
      export_file_error_ask_for_upload: 'Failed to export task. Are you willing to provide working scene to develop team for bug report?',
    },
    image_trace_panel: {
      apply: '適用する',
      back: '戻る',
      cancel: 'キャンセル',
      next: '次へ',
      brightness: '輝度',
      contrast: 'コントラスト',
      threshold: 'しきい値',
      okay: 'OK',
      tuning: 'パラメーター',
    },
    photo_edit_panel: {
      apply: '適用する',
      back: '戻る',
      cancel: 'キャンセル',
      next: '次へ',
      sharpen: 'シャープにする',
      sharpness: 'シャープネス',
      radius: '半径',
      crop: '切り抜き',
      curve: '曲線',
      start: '開始',
      processing: '処理中',
      invert: '色を反転',
      okay: 'OK',
      compare: '比較する',
      phote_edit: '写真編集',
    },
    document_panel: {
      document_settings: 'ドキュメント設定',
      engrave_parameters: '彫刻パラメーター',
      workarea: '作業領域',
      rotary_mode: 'ロータリー',
      borderless_mode: 'ボーダーレスモード',
      engrave_dpi: '解像度',
      enable_diode: 'ハイブリッドレーザー',
      enable_autofocus: 'オートフォーカス',
      add_on: 'アドオン',
      low: '低',
      medium: '中',
      high: '高',
      ultra: '超高',
      enable: '有効',
      disable: '無効',
      cancel: 'キャンセル',
      save: '保存する',
    },
    object_panels: {
      wait_for_parsing_font: 'フォントの解析中です… 少々お待ちください',
      text_to_path: {
        font_substitute_pop: 'テキスト：「%s」に書体：「%s」サポートできない文字があります.\n%s\n書体「%s」に変更して宜しいですか',
        check_thumbnail_warning: 'テキストをパスに解析するときに一部の書体が他のフォントに変更され、一部の文字が正常に変換されないことがあります.\nタスクを送信する前に、プレビュー画像をもう一度確認してください。',
        error_when_parsing_text: 'テキストをパスに変換するときにエラーが発生しました：\n%s',
        use_current_font: '現在のフォントを使用',
      },
      lock_desc: '幅と高さの比率を保持（SHIFT）',
    },
    tool_panels: {
      cancel: 'キャンセル',
      confirm: '確認する',
      grid_array: 'グリッド配列を作成',
      array_dimension: '配列の次元',
      rows: '行',
      columns: '列',
      array_interval: '配列の間隔',
      dx: 'X',
      dy: 'Y',
      offset: 'オフセット',
      nest: '整列の最適化',
      _offset: {
        direction: 'オフセット方向',
        inward: '内向き',
        outward: '外向き',
        dist: 'オフセット距離',
        corner_type: 'コーナー',
        sharp: 'シャープ',
        round: 'ラウンド',
        fail_message: 'オブジェクトのオフセットに失敗しました。',
        not_support_message: 'サポートされていないSVGタグを含む選択された要素：\nイメージ、グループ、テキスト、インポートされたオブジェクト。',
      },
      _nest: {
        start_nest: '整列開始',
        stop_nest: '整列停止',
        end: '終了する',
        spacing: '間隔',
        rotations: 'Possible Rotation',
        no_element: '整列できるオブジェクトがありません',
      },
    },
    network_testing_panel: {
      network_testing: 'ネットワーク試験',
      local_ip: 'ローカルIPアドレス：',
      insert_ip: 'ターゲットデバイスのIPアドレス：',
      empty_ip: '#818 最初にターゲットデバイスのIPを入力してください。',
      start: '開始',
      end: '終了',
      testing: 'ネットワークの試験中…',
      invalid_ip: '#818 無効なIPアドレス',
      ip_startswith_169: '#843 マシンのIPアドレスは169.254で始まります',
      connection_quality: '接続品質',
      average_response: '平均応答時間',
      test_completed: 'テストが完了しました',
      test_fail: 'テストに失敗しました',
      cannot_connect_1: '#840 ターゲットIPに接続することができません。',
      cannot_connect_2: '#840 ターゲットIPに接続することができません。ターゲットが同じネットワークにあることを確認してください。',
      network_unhealthy: '#841 接続品質 <　70 または 平均応答時間 > 100ms',
      device_not_on_list: '#842 マシンはリストに含まれていませんが、接続品質 > 70、平均応答時間 <100ms',
      hint_device_often_on_list: 'マシンがリストに見つからないことがよくありますか？',
      link_device_often_on_list: 'https://support.flux3dp.com/hc/en-us/articles/360001841636',
      hint_connect_failed_when_sending_job: 'タスクの送信時に接続に失敗しましたか？',
      link_connect_failed_when_sending_job: 'https://support.flux3dp.com/hc/en-us/articles/360001841656',
      hint_connect_camera_timeout: 'カメラのプレビューを開始するとタイムアウトが発生しますか？',
      link_connect_camera_timeout: 'https://support.flux3dp.com/hc/en-us/articles/360001791895',
      cannot_get_local: 'ローカルIPアドレスへのアクセスに失敗しました。',
      fail_to_start_network_test: '#817 ネットワーク試験を開始できません。',
      linux_permission_hint: 'このエラーは通常、権限が不十分なために発生します。\nターミナルで「sudo beam-studio --no-sandbox」を実行して、権限を取得し、ネットワークテストを実行してください。',
    },
    layer_color_config_panel: {
      layer_color_config: 'レイヤーの色設定',
      color: '色',
      power: '出力',
      speed: '速度',
      repeat: '実行',
      add: '追加する',
      save: '保存する',
      cancel: 'キャンセルする',
      default: 'デフォルトにリセット',
      add_config: '色を追加',
      in_use: 'この色は使用中です。',
      no_input: '16進数の有効なカラーコードを入力してください。',
      sure_to_reset: 'カスタマイズされたパラメータはすべて失われます。本当にデフォルトにリセットしますか？',
      sure_to_delete: 'この色の設定を削除してもよろしいですか？',
    },
    svg_editor: {
      unnsupported_file_type: 'ファイルタイプは直接サポートされていません。ファイルをSVGまたはビットマップに変換してください',
      unable_to_fetch_clipboard_img: '画像をクリップボードから転送失敗しました。',
    },
    units: {
      walt: 'W',
      mm: 'mm',
    },
  },
  flux_id_login: {
    connection_fail: '#847 FLUXメンバーサービスへの接続に失敗しました。',
    login_success: '正常にログインしました。',
    login: 'ログイン',
    unlock_shape_library: 'ログインして形状データベースのロックを解除します。',
    email: 'Eメール',
    password: 'パスワード',
    remember_me: 'ログインしたままにする',
    forget_password: 'パスワードをお忘れの場合',
    register: 'FLUXアカウントを作成する',
    offline: 'オフライン作業',
    work_offline: 'オフライン作業',
    incorrect: 'メールアドレスまたはパスワードが正しくありません。',
    not_verified: 'メールアドレスが未認証です。',
    new_to_flux: 'FLUXは初めてですか？ アカウントの作成してください。',
    signup_url: 'https://store.flux3dp.com/my-account/#sign-up',
    lost_password_url: 'https://store.flux3dp.com/my-account/lost-password/',
  },
  noun_project_panel: {
    login_first: 'ログインして形状データベースのロックを解除します。',
    enjoy_shape_library: '形状データベースをお楽しみください。',
    shapes: '形',
    elements: '要素',
    recent: '最近使用された',
    search: '搜尋',
    clear: '消去',
    export_svg_title: 'SVGをエクスポートできません',
    export_svg_warning: 'このプロジェクトには、知的財産法によって保護されているオブジェクトが含まれています。したがって、Beam Studioは、エクスポート中にこれらのオブジェクトを自動的に除外します。プロジェクトをBeam Studioシーン（.beam形式）内に保存して、すべてのデータを保持することもできます。それでもエクスポートしますか？',
    learn_more: 'もっと詳しく知る',
  },
  change_logs: {
    change_log: '変更ログ：',
    added: '追加：',
    fixed: '修正：',
    changed: '変更：',
    see_older_version: '以前のバージョンを見る',
    help_center_url: 'https://support.flux3dp.com/hc/en-us/sections/360000421876',
  },
  select_device: {
    select_device: 'デバイスを選択',
    auth_failure: '#811 認証失敗',
    unable_to_connect: '#810 マシンとの安定した接続を構築できません',
  },
  device: {
    pause: '一時停止',
    paused: '一時停止中',
    pausing: '一時停止処理中',
    select_printer: 'プリンターを選択',
    retry: '再試行',
    status: 'ステータス',
    busy: 'ビジー',
    ready: '準備完了',
    reset: 'リセット（Kick）',
    abort: 'アボート',
    start: '開始',
    please_wait: 'お待ちください…',
    quit: '終了する',
    completing: '完了処理中',
    aborted: 'アボートしました',
    completed: '完了済み',
    aborting: 'アボート処理中',
    starting: '開始処理中',
    preparing: '準備中',
    resuming: '再開中',
    scanning: 'スキャン中',
    occupied: '維持中',
    running: '作業中',
    uploading: 'アップロード中',
    processing: '処理中',
    disconnectedError: {
      caption: 'マシンが切断されました',
      message: '%sのネットワークアクセスが利用可能かどうか確認してください',
    },
    unknown: '不明',
    pausedFromError: 'エラーにより一時停止しました',
    model_name: 'モデル名',
    IP: 'IP',
    serial_number: 'シリアル番号',
    firmware_version: 'ファームウェアバージョン',
    UUID: 'UUID',
    select: '選択する',
    deviceList: 'マシンリスト',
    disable: '無効にする',
    enable: '有効にする',
  },
  monitor: {
    monitor: 'モニター',
    go: '開始',
    start: '開始',
    pause: '一時停止',
    stop: '停止',
    record: '記録',
    camera: 'カメラ',
    connecting: '接続しています。お待ちください…',
    HARDWARE_ERROR_MAINBOARD_ERROR: '#401 重大なエラー：メインボードがオフラインです。 FLUXサポートにお問い合わせください。', // Deprecated in FW 3.3.1
    HARDWARE_ERROR_SUBSYSTEM_ERROR: '#402 重大なエラー：サブシステムが応答しません。 FLUXサポートにお問い合わせください。', // Deprecated in FW 3.3.1
    HARDWARE_ERROR_PUMP_ERROR: '#900 水槽にご確認ください。',
    HARDWARE_ERROR_DOOR_OPENED: '#901 続行するにはドアを閉じてください。',
    HARDWARE_ERROR_OVER_TEMPERATURE: '#902 過熱。数分お待ちください。',
    HARDWARE_ERROR_BOTTOM_OPENED: '#903 ボトムカバーオープン。ドアを閉めて続行します。',
    USER_OPERATION_ROTARY_PAUSE: 'ロータリーモーターに切り替えてください',
    RESOURCE_BUSY: 'マシンはビジーです\n実行されていない場合は、マシンを再起動してください',
    DEVICE_ERROR: '何かがうまくいかなかった\nマシンを再起動してください', // Deprecated in FW 3.3.1
    NO_RESPONSE: '#905 メインボードへの接続中にエラーが発生しました。\nマシンを再起動してください。',
    SUBSYSTEM_ERROR: '#402 重大なエラー：サブシステムが応答しません。 FLUXサポートにお問い合わせください。',
    HARDWARE_FAILURE: '何かがうまくいかなかった\nマシンを再起動してください', // Deprecated in FW 3.3.1
    MAINBOARD_OFFLINE: '#905 メインボードへの接続中にエラーが発生しました。\nマシンを再起動してください。',
    bug_report: 'バグ報告',
    processing: '処理中',
    savingPreview: 'サムネイルの生成中',
    hour: 'h',
    minute: 'm',
    second: 's',
    left: '左',
    temperature: '温度',
    forceStop: '現在のタスクをアボートしますか？',
    upload: 'アップロード',
    download: 'ダウンロード',
    relocate: '再配置',
    cancel: 'キャンセル',
    prepareRelocate: '再配置の準備',
    extensionNotSupported: 'このファイル形式はサポートされていません',
    fileExistContinue: 'ファイルはすでに存在します。ファイルを置き換えますか？',
    confirmGToF: 'GCodeは、FCodeに変換されます。続行しますか？（存在する場合は、置き換えられます）',
    confirmFileDelete: 'このファイルを削除してもよろしいですか？',
    ask_reconnect: 'マシンとの接続が切断されました。再接続しますか？',
    task: {
      EXTRUDER: '印刷',
      PRINT: '印刷',
      LASER: 'レーザー彫刻',
      DRAW: 'デジタルド描画',
      CUT: 'ビニール切断',
      VINYL: 'ビニール切断',
      BEAMBOX: 'レーザー彫刻',
      'N/A': 'フリーモード',
    },
  },
  alert: {
    caption: 'エラー',
    duplicated_preset_name: '重複したプリセット名',
    info: '情報',
    warning: '警告',
    error: 'おっと',
    oops: 'おっと',
    retry: '再試行',
    abort: 'アボート',
    confirm: '確認する',
    cancel: 'キャンセル',
    close: '閉じる',
    ok: 'OK',
    ok2: 'はい',
    yes: 'はい',
    no: 'いいえ',
    stop: '停止',
    save: '保存する',
    dont_save: '保存しない',
  },
  caption: {
    connectionTimeout: '接続タイムアウト',
  },
  message: {
    connecting: '接続中…',
    connectingMachine: '%sを接続しています…',
    tryingToConenctMachine: 'マシンに接続しようとしています…',
    connected: '接続済み',
    authenticating: '認証中…',
    enteringRawMode: 'RAWモードに入る中…',
    endingRawMode: 'RAWモードを終了中…',
    enteringLineCheckMode: 'ラインチェックモードに入る中…',
    endingLineCheckMode: 'ラインチェックモードを終了中…',
    exitingRotaryMode: 'ロータリーモードを終了中…',
    turningOffFan: 'ファンをオフにする…',
    turningOffAirPump: 'エアポンプをオフにする…',
    gettingLaserSpeed: 'レーザーヘッド速度の読み取り中…',
    settingLaserSpeed: 'レーザーヘッド速度を設定中…',
    retrievingCameraOffset: 'カメラオフセットの読み取り中…',
    connectingCamera: 'カメラを接続中…',
    homing: 'ホーミング…',
    connectionTimeout: '#805 デバイス接続タイムアウト，ネットワークの状態とマシンのWi-Fiインジケーターを確認してください。',
    device_not_found: {
      caption: '出るフォトのマシンが見つかりません',
      message: '#812 マシンのWi-Fiインジケーターを確認してください',
    },
    device_busy: {
      caption: 'マシンビジー状態',
      message: 'マシンは別のタスクを実行しています。後で再試行してください。動作しなくなった場合は、マシンを再起動してください。',
    },
    device_is_used: 'マシンは使用中です。現在のタスクをアボートしますか？',
    monitor_too_old: {
      caption: '古いファームウェア',
      content: '#814 <a target="_blank" href="http://helpcenter.flux3dp.com/hc/en-us/articles/216251077">このガイド</a>を使って、最新のファームウェアをインストールしてください。',
    },
    unknown_error: '#821 アプリケーションで不明なエラーが発生しました。[ヘルプ]>[メニュー]>[バグレポート]を使用してください。',
    unknown_device: '#826 マシンに接続できません。USBがマシンに接続されていることを確認してください',
    unsupport_osx_version: '現在の MacOSバージョンX ％s は一部の機能をサポートしていない場合があります。最新のバージョンに更新してください。',
    unsupport_win_version: '現在の Windows OSバージョンX ％s は一部の機能をサポートしていない場合があります。最新のバージョンに更新してください。',
    need_password: 'マシンに接続するには、パスワードが必要です',
    unavailableWorkarea: '#804 セットした作業領域がマシンの作業領域を超えます。マシンの作業領域を確認や[編集]>[ドキュメント設定]で作業領域をセットくださいい。',
    please_enter_dpi: 'ファイルの単位を入力してください',
    auth_error: '#820 認証エラー：Beam Studioとマシンのファームウェアを最新バージョンに更新してください。',
    usb_unplugged: 'USB接続が失われました。USB接続を確認してください。',
    uploading_fcode: 'FCodeのアップロード中',
    cant_connect_to_device: '#827 マシンを接続できません。接続を確認してください',
    unable_to_find_machine: 'マシンを見つけることができません',
    disconnected: '接続が不安定です。デバイスの接続を確認して、後で再試行してください',
    unable_to_start: '#830 タスクを開始することができません。これが再び起きた場合は、バグレポートでご連絡ください：\n',
    camera: {
      camera_cable_unstable: 'カメラが写真を不安定に転送していることが検出されました。プレビューは引き続き正常に実行できますが、プレビューが遅い、またはタイムアウトになる問題がある可能性があります。',
      fail_to_transmit_image: '#845 画像の送信に不具合が発生しました。Beamboxを再起動するか、ご連絡ください。',
      ws_closed_unexpectly: '#844 マシンカメラへの接続が予期せず閉じられました。',
      continue_preview: '継続する',
      abort_preview: '中止する',
    },
  },
  machine_status: {
    '-10': '維持モード',
    '-2': 'スキャン中',
    '-1': '維持中',
    0: 'アイドル状態',
    1: '初期化中',
    2: 'ST_TRANSFORM',
    4: '開始処理中',
    6: '再開中',
    16: '作業中',
    18: '再開中',
    32: '一時停止中',
    36: '一時停止中',
    38: '一時停止処理中',
    48: '一時停止中',
    50: '一時停止処理中',
    64: '完了済み',
    66: '完了処理中',
    68: '準備中',
    128: 'アボートしました',
    UNKNOWN: '不明',
  },
  camera_calibration: {
    update_firmware_msg1: 'ファームウェアはこの機能をサポートしていません。ファームウェアを v',
    update_firmware_msg2: 'またはそれ以上にアップデートして。続行してください。（メニュー > マシン > [お使いのマシン] >ファームウェアのアップデート）',
    camera_calibration: 'カメラの較正',
    back: '戻る',
    next: '次へ',
    skip: 'スキップ',
    cancel: 'キャンセル',
    finish: '完了済み',
    do_engraving: '彫刻をする',
    start_engrave: '彫刻開始',
    ask_for_readjust: '彫刻ステップをスキップして写真を撮り、キャリブレーションを行いますか？',
    please_goto_beambox_first: 'この機能を使用するには、彫刻モード（Beambox）に切り替えてください。',
    please_place_paper: 'ワークエリアの左上隅にA4またはレターサイズの白い用紙を置いてください',
    please_refocus: {
      beambox: 'プラットフォームを焦点に合わせてください（折り返されたアクリルの高さ）',
      beamo: 'レーザーヘッドを調整して、彫刻オブジェクトに焦点を合わせます（折り返されたアクリルの高さ',
      beamo_af: 'オートフォーカスアドオンのサイドボタンをダブルタップして、プローブを素材にそっと触れさせます。',
    },
    without_af: 'オートフォーカスなし',
    with_af: 'オートフォーカスオン',
    dx: 'X',
    dy: 'Y',
    rotation_angle: '回転',
    x_ratio: 'X比',
    y_ratio: 'Y比',
    show_last_config: '前回の結果を表示',
    use_last_config: '前回の結果をインポート',
    taking_picture: '写真撮影中…',
    analyze_result_fail: 'キャプチャした画像を分析することができません。<br/>次のことを確認してください：<br/>1. キャプチャした画像が白い紙で完全に覆われている。<br/>2. プラットフォームは適切にフォーカスされている。',
    drawing_calibration_image: '較正画像の描画中…',
    calibrate_done: '較正が完了しました。正確に焦点を合わせると、カメラの精度が向上します。',
    hint_red_square: '赤い枠の外側をカットした枠に合わせてください。',
    hint_adjust_parameters: 'これらのパラメーターを使用して、赤い正方形を調整します',
  },
  diode_calibration: {
    update_firmware_msg1: 'ファームウェアはこの機能をサポートしていません。ファームウェアを v',
    update_firmware_msg2: 'またはそれ以上にアップデートして。続行してください。（メニュー > マシン > [お使いのマシン] >ファームウェアのアップデート）',
    diode_calibration: 'ハイブリッドレーザーモジュールの較正',
    back: '戻る',
    next: '次へ',
    skip: 'スキップ',
    cancel: 'キャンセル',
    finish: '完了済み',
    do_engraving: '彫刻をする',
    start_engrave: '彫刻開始',
    ask_for_readjust: '彫刻ステップをスキップして写真を撮り、キャリブレーションを行いますか？',
    please_do_camera_calibration_and_focus: {
      beambox: 'ハイブリッドレーザーモジュールを校正する場合、カメラが必要です。\nハイブリッドレーザーモジュールを校正する場合、カメラが必要です。\nプラットフォームを焦点に合わせてください（折り返されたアクリルの高さ）',
      beamo: 'ハイブリッドレーザーモジュールを校正する場合、カメラが必要です。\nレーザーヘッドを調整して、彫刻オブジェクトに焦点を合わせます（折り返されたアクリルの高さ）',
    },
    please_place_paper: 'ワークエリアの左上隅にA4またはレターサイズの白い用紙を置いてください',
    dx: 'X',
    dy: 'Y',
    drawing_calibration_image: '較正画像の描画中…',
    taking_picture: '写真撮影中…',
    calibrate_done: '較正が完了しました。ハイブリッドレーザーオフセットを保存しました。',
    hint_red_square: '赤い枠の外側をカットした枠に合わせてください。',
    hint_adjust_parameters: 'これらのパラメーターを使用して、赤い正方形を調整します',
  },
  input_machine_password: {
    require_password: '「%s」にはパスワードが必要です。',
    connect: '接続する',
    password: 'パスワード',
  },
  tutorial: {
    skip: 'スキップ',
    welcome: 'ようこそ',
    suggest_calibrate_camera_first: '本機を初めて使用する場合は、カメラのキャリブレーションを行ってください。 （メニュー> マシン> [マイマシン]> カメラのキャリブレーション）そして、プレビューの前に毎回プラットフォームの焦点を適切に合わせ直して、より良い撮影結果プレビューを取得します。',
    camera_calibration_failed: 'カメラの較正に失敗しました',
    ask_retry_calibration: 'カメラをもう一度キャリブレーションしますか？',
    skipped_camera_calibration: 'カメラのキャリブレーションをスキップしました。 メニューバー（メニュー> マシン> [マイマシン]> カメラのキャリブレーション）からいつでもカメラをキャリブレーションできます。',
    needNewUserTutorial: 'Beam Studioのチュートリアルはよろしいですか？',
    needNewInterfaceTutorial: 'Beam Studioのの新しいインターフェースの紹介はよろしいですか？',
    next: '次ヘ',
    look_for_machine: 'チュートリアル用のマシンを探しています',
    unable_to_find_machine: 'チュートリアル用のマシンが見つかりません。接続設定ページに移動しますか？再試行するか、チュートリアルをスキップしますか？',
    skip_tutorial: 'チュートリアルをスキップしました。 [ヘルプ]> [初めてのチュートリアルを表示]をクリックすると、いつでもチュートリアルを開始できます',
    set_connection: '接続を設定',
    retry: 'リトライ',
    newUser: {
      draw_a_circle: '円を描く',
      drag_to_draw: 'ドラッグして描画',
      infill: 'インフィルをオンにする',
      switch_to_layer_panel: 'レイヤーパネルに切り替え',
      set_preset_wood_engraving: 'プリセットの設定：木材 - 彫刻',
      set_preset_wood_cut: 'プリセットの設定：木材 - 切断',
      add_new_layer: '新しいレイヤーを追加する',
      draw_a_rect: '長方形を描く',
      switch_to_preview_mode: 'プレビューモードに切り替え',
      preview_the_platform: 'プラットフォームをプレビューする',
      end_preview_mode: 'プレビューモードを終了する',
      put_wood: '1. サンプル木材を入れます',
      adjust_focus: '2. フォーカスを調整する',
      close_cover: '3. カバーを閉じます',
      send_the_file: 'ファイルを送信',
      end_alert: 'チュートリアルを終了してもよろしいですか？',
      please_select_wood_engraving: '「木材 - 彫刻」プリセットを選択してください。',
      please_select_wood_cutting: '「木材 - 切断」プリセットを選択してください。',
    },
    newInterface: {
      camera_preview: 'カメラプレビュー',
      select_image_text: '選択 / 画像 / テキスト',
      basic_shapes: '基本形状',
      pen_tool: 'ペンツール',
      add_new_layer: '新しいレイヤーを追加',
      rename_by_double_click: 'ダブルクリックで名前を変更',
      drag_to_sort: 'ドラッグして並べ替える',
      layer_controls: '右クリックしてレイヤーコントロールを呼び出す:\nレイヤーの複製 / マージ / ロック / 削除',
      switch_between_layer_panel_and_object_panel: 'レイヤーパネルとオブジェクトパネルを切り替える',
      align_controls: '整列管理',
      group_controls: 'グループ管理',
      shape_operation: '形状操作',
      flip: 'フリップ',
      object_actions: 'オブジェクトアクション',
      end_alert: '新しいインターフェースの紹介を終了してもよろしいですか？',
    },
    links: {
      adjust_focus_bm: 'https://flux3dp.zendesk.com/hc/en-us/articles/360001684196',
      adjust_focus_bb: 'https://support.flux3dp.com/hc/en-us/articles/360001683675',
    },
    tutorial_complete: '紹介が終わりました、作っていきましょう！',
  },
} as ILang;
