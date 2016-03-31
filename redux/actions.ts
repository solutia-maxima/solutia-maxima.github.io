const changeTemp = {
    type: 'CHANGE_TEMP',
    execute: (store, newTemp) => {
        store.dispatch({
            type: changeTemp.type,
            newTemp
        });
    }
};

export const Actions = {
    changeTemp
};
