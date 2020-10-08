import {
    LOGIN,
    SIGNUP
} from "_store/actions/user";

// utils
import { setToState } from "_utils/functions/actionsStore";
import AsycStorage from '_utils/functions/asycStorage'
const initialState = {
    login: {},
    sigUp: {}
};

function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return setToState(state, {
                login: action.payload,
            });
        }
        case SIGNUP: {
            return setToState(state, {
                signUp: action.payload,
            });
        }
        default:
            return state;
    }
}

export { user };
