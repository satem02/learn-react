import { ACTION_TYPE_CATEGORY, ACTION_SET_DATA } from "../actions"

const initialState = {
    categories: []
}

export default (state = initialState, action) => {

    if (action.actionType === ACTION_TYPE_CATEGORY) {
        switch (action.type) {
            case ACTION_SET_DATA:
                return { categories: action.payload }
            default:
                return state;
        }
    }


    return state;
}