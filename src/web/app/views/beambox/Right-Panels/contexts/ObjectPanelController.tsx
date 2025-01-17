import { ObjectPanelContextHelper } from 'app/views/beambox/Right-Panels/Object-Panel';

const updateDimensionValues = (newValue) => {
    if (!ObjectPanelContextHelper.context) {
        // console.log('ObjectPanel is not mounted now.');
    } else {
        ObjectPanelContextHelper.context.updateDimensionValues(newValue);
    }
};

const getDimensionValues = (key) => {
    if (!ObjectPanelContextHelper.context) {
        //console.log('ObjectPanel is not mounted now.');
    } else {
        return ObjectPanelContextHelper.context.getDimensionValues(key);
    }
}

const updateObjectPanel = () => {
    if (!ObjectPanelContextHelper.context) {
        //console.log('ObjectPanel is not mounted now.');
    } else {
        ObjectPanelContextHelper.context.updateObjectPanel();
    }
};

export default {
    updateObjectPanel: updateObjectPanel,
    updateDimensionValues: updateDimensionValues,
    getDimensionValues: getDimensionValues
}
