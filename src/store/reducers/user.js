import {
    LOGIN,
    LOGOUT,
    SET_USER_DATA,
    SET_OPEN_MODAL,
    SET_PREFERENT_COIN,
    SET_NEW_TOKEN,
    SET_SYMBOL_PREFERENT_COIN,
    SET_NOTIFICATION_TOKEN,
} from "_store/actions/user";

// utils
import { setToState } from "_utils/index";

const initialState = {
    email: "",
    notificationToken: null,
    isAuthenticated: false,
    isOpenModal: false,
    preferentCoin: "MXN",
    openModalTransaction: false,
    dataModalTransaction: {
        coin: "",
        coin_name: "",
        operation: "",
        type: "",
        side: "",
        created_at: "",
        left_coin: "",
        right_coin: "",
        amount_paid: "",
        amount_received: "",
        amount: "",
        total_amount: "",
        address: "",
        receiver: "",
        explorer_link: "",
        market: "",
        price: "",
        filled_as: "",
        closed_at: "",
        is_innerTransfer: "",
        fee_amount: "",
        description: "",
        wallet_name: "",
        sender: "",
        txId: "",
    },
    symbolPreferentCoin: "$",
    isTwoFactor: null,
};

function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return setToState(state, {
                ...action.payload.data,
                isAuthenticated: true,
            });
        }
        case LOGOUT: {
            return initialState;
        }
        case SET_USER_DATA:
            return setToState(state, {
                ...action.payload.data,
            });
        case SET_OPEN_MODAL:
            return setToState(state, {
                isOpenModal: !state.isOpenModal,
            });
        case SET_PREFERENT_COIN:
            return setToState(state, {
                preferentCoin: action.payload,
            });
        case SET_SYMBOL_PREFERENT_COIN:
            return setToState(state, {
                symbolPreferentCoin: action.payload,
            });
        case SET_NEW_TOKEN: {
            return setToState(state, {
                token: action.payload,
            });
        }
        case SET_NOTIFICATION_TOKEN: {
            return setToState(state, {
                notificationToken: action.payload,
            });
        }
        default:
            return state;
    }
}

export { user };
