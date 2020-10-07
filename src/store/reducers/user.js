import {
    LOGIN,
    LOGOUT,
    SET_USER_DATA,
    SET_OPEN_MODAL,
    SET_PREFERENT_COIN,
    SET_NEW_TOKEN,
    SET_SYMBOL_PREFERENT_COIN,
    SET_NOTIFICATION_TOKEN,
    SET_TWO_FACTOR,
    SET_ACTIVATE_ACCOUNT
} from "_store/actions/user";

// utils
import { setToState } from "_utils/index";
import Store from '_utils/functions/store'
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
            Store.set("token", action.payload.data.token);
            action.payload.data.refresh &&
                Store.set("refresh", action.payload.data.refresh);
            Store.set("email", action.payload.data.email);
            return setToState(state, {
                ...action.payload.data,
                isAuthenticated: true,
            });
        }
        case SET_TWO_FACTOR: {
            Store.set("isTwoFactor", action.payload.data.isTwoFactor || "");
            Store.set("device_name", action.payload.data.device_name || "");
            Store.set("unique_device_id", action.payload.data.unique_device_id || "");
            Store.set("email", action.payload.data.email || "");
            Store.set("two_factor_mail", action.payload.data.two_factor_mail || "");
        }
        case SET_ACTIVATE_ACCOUNT: {
            Store.set(
                "isActivateAccount",
                action.payload.data.isActivateAccount || ""
            );
            Store.set("device_name", action.payload.data.device_name || "");
            Store.set("unique_device_id", action.payload.data.unique_device_id || "");
            Store.set("mac_address", action.payload.data.mac_address || "");
        }
        case LOGOUT: {
            Store.remove("token");
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
