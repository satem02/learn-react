// ACTION
export const ACTION_LOAD_DATA = 'LOAD_DATA';
export const ACTION_SET_DATA = 'SET_DATA';

// ACTION TYPE
export const ACTION_TYPE_CATEGORY = 'CATEGORY';

// ACTION CREATOR
export const setDataActionCreator = (actionType, payload) => {
    return {
        type: ACTION_SET_DATA,
        actionType: actionType,
        payload: payload
    }
}
