import { createAction } from "_utils/";

export const LOGIN = "@user/LOGIN";
export const LOGOUT = "@user/LOGOUT";
export const SET_USER_DATA = "@user/SET_USER_DATA";
export const SET_OPEN_MODAL = "@user/SET_OPEN_MODAL";
export const SET_PREFERENT_COIN = "@user/SET_PREFERENT_COIN";
export const SET_SYMBOL_PREFERENT_COIN = "@user/SET_SYMBOL_PREFERENT_COIN";
export const SET_NEW_TOKEN = "@user/SET_NEW_TOKEN";
export const SET_MODAL_TRANSACTION = "@user/SET_MODAL_TRANSACTION";
export const SET_DATA_MODAL_TRANSACTION = "@user/SET_DATA_MODAL_TRANSACTION";
export const SET_NOTIFICATION_TOKEN = "@user/SET_NOTIFICATION_TOKEN";
export const SET_TWO_FACTOR = "@user/SET_TWO_FACTOR";
export const SET_ACTIVATE_ACCOUNT = "@user/SET_ACTIVATE_ACCOUNT";

const loginAction = createAction(LOGIN);
const logoutAction = createAction(LOGOUT);
const setUserDataAction = createAction(SET_USER_DATA);
const setOpenModalAction = createAction(SET_OPEN_MODAL);
const setPreferentCoinAction = createAction(SET_PREFERENT_COIN);
const setSymbolPreferentCoinAction = createAction(SET_SYMBOL_PREFERENT_COIN);
const setNewTokenAction = createAction(SET_NEW_TOKEN);
const setModalTransactionAction = createAction(SET_MODAL_TRANSACTION);
const setDataModalTransactionAction = createAction(SET_DATA_MODAL_TRANSACTION);
const setNotificationTokenAction = createAction(SET_NOTIFICATION_TOKEN);
const setTwoFactorAction = createAction(SET_TWO_FACTOR);
const setActivateAccountAction = createAction(SET_ACTIVATE_ACCOUNT);

export const login = (data) => loginAction({ data });
export const logout = () => logoutAction();
export const setUserData = (data) => setUserDataAction({ data });
export const setOpenModal = () => setOpenModalAction();
export const setPreferentCoin = (data) => setPreferentCoinAction(data);
export const setSymbolPreferentCoin = (data) =>
    setSymbolPreferentCoinAction(data);
export const setNewToken = (data) => setNewTokenAction(data);
export const setModalTransaction = (data) => setModalTransactionAction(data);
export const setDataModalTransaction = (data) =>
    setDataModalTransactionAction(data);
export const setNotificationToken = (data) => setNotificationTokenAction(data);
export const setTwoFactor = (data) => setTwoFactorAction(data);
export const setActivateAccount = (data) => setActivateAccountAction(data);
