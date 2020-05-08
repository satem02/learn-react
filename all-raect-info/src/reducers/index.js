import { ACTION_TYPE_CATEGORY, ACTION_SET_DATA, ACTION_TYPE_UNIT } from "../actions"

const initialState = {
    categories: [],
    units:[]
}

export default (state = initialState, action) => {
    // console.log(state);
    // console.log(action);
    if (action.actionType === ACTION_TYPE_CATEGORY) {
        switch (action.type) {
            case ACTION_SET_DATA:
                return { categories: action.payload }
            default:
                return state;
        }
    }
    if (action.actionType === ACTION_TYPE_UNIT) {
        switch (action.type) {
            case ACTION_SET_DATA:
                return { units: action.payload }
            default:
                return state;
        }
    }
    return state;
}