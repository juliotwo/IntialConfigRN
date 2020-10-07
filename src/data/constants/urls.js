// Base
const BASE_API_V1 = "https://api.staging.tauros.io/api/v1/";
const BASE_API_V2 = "https://api.staging.tauros.io/api/v2/";
const BASE_API_V3 = "https://api.staging.tauros.io/api/v3/";
const COINGECKO_API_BASE_URL = "https://api.coingecko.com/api/v3/";
//WebSocket
export const PUBLIC_WEB_SOCKET_URL = "wss://wsv2-staging.tauros.io";
// Trade
export const getFeeCoin = (coin) => `${BASE_API_V1}data/fees/?coin=${coin}`;
export const getTradingFee = (coin) =>
    `${BASE_API_V2}trading/get-user-trading-fee/mxn/`;
export const sendFunds = `${BASE_API_V1}data/withdraw/`;
export const getOrdersMarket = (coin) =>
    `${BASE_API_V1}trading/orders/?market=${coin}-MXN`;
export const getCoins = `${BASE_API_V1}trading/markets/`;
export const getHistoryPrice = (coin, days) =>
    `${BASE_API_V2}trading/prices/${coin}/?days=${days}`;
export const getLastPrice = `${BASE_API_V2}trading/ticker/`;
//Wallets
export const sendFundsCoin = `${BASE_API_V3}wallets/crypto-withdraw/`;
export const sendFundsMXN = `${BASE_API_V3}wallets/mxn-withdraw/`;
export const withdrawaCard = `${BASE_API_V2}paycards/spei-withdraw/`;
export const transferCardToWallet = `${BASE_API_V2}wallets/transfer-card-to-wallet/`;
export const sendFundsTauros = `${BASE_API_V3}wallets/inner-transfer/`;
export const sendFundsDash = `${BASE_API_V3}wallets/dashtext-withdraw/`;
export const sendInnerFunds = `${BASE_API_V1}data/transfer/`;
export const fiatwithdraw = `${BASE_API_V2}wallets/mxn-withdraw/`;
export const sendDashText = `${BASE_API_V1}data/dashtext/`;
export const changePassword = `${BASE_API_V1}change-password/`;
export const getCoinPreferent = `${BASE_API_V2}preference/`;
export const getCoinsPreferent = `${BASE_API_V1}data/preference-coins/`;
export const getCoinsMinimum = `${BASE_API_V2}coins/`;
export const buyAndSell = `${BASE_API_V1}trading/placeorder/`;
export const signUp = `${BASE_API_V2}signup/`;
export const verifyEmail = `${BASE_API_V2}activate-account/`;
export const reSendEmail = `${BASE_API_V2}resend-email-verified/`;
export const changePhoneNumber = `${BASE_API_V1}change-phone-number/`;
export const nip = `${BASE_API_V2}nip/`;
export const checkIp = `${BASE_API_V2}check_ip/`;
export const getWallets = `${BASE_API_V1}data/listbalances/`;
export const getPriceCoinsMXN = `${COINGECKO_API_BASE_URL}simple/price?ids=usd-coin&vs_currencies=mxn`;
export const getUserActivity = `${BASE_API_V2}activity/`;
export const postTransferToCard = `${BASE_API_V2}wallets/transfer-wallet-to-card/`;
export const contacts = `${BASE_API_V2}wallets/contact/`;

//Auth
export const login = `${BASE_API_V3}auth/signin/`;
export const refreshToken = `${BASE_API_V3}auth/refresh/`;
export const verifyToken = `${BASE_API_V3}auth/verify/`;
export const twoFactorEmailLogin = `${BASE_API_V2}auth/verify-tfa-email/`;
export const loginNIP = `${BASE_API_V3}auth/signin-nip/`;
export const twoFactorLogin = `${BASE_API_V2}auth/verify-tfa/`;
export const getProfile = `${BASE_API_V1}profile/`;
//Enpoints cards
export const getCardNIP = `${BASE_API_V2}paycards/my-nip/`;
export const getCardCVV = `${BASE_API_V2}paycards/virtual/cvv/`;
export const getCardsTransations = `${BASE_API_V2}paycards/history/`;
export const getCards = `${BASE_API_V2}paycards/cards/`;
export const requestCard = `${BASE_API_V2}paycards/request/`;
export const payCard = `${BASE_API_V2}paycards/request/paycard/`;
export const getCardRequestStatus = `${BASE_API_V2}paycards/request/status/`;
export const activateCard = `${BASE_API_V2}paycards/activate/`;
export const lockCard = `${BASE_API_V2}paycards/lock/`;
export const activateVirtualCard = `${BASE_API_V2}paycards/activate-virtual/`;
export const getCardColorsList = `${BASE_API_V2}paycards/cards/colors/`;
export const setCardColor = `${BASE_API_V2}paycards/cards/set_color/`;
export const taurosTransferCard = `${BASE_API_V2}paycards/tauros-transfer/`;
export const depositInfoCard = `${BASE_API_V2}paycards/deposit-info/`;
//Cashback enpoints
export const getCashbackCoins = `${BASE_API_V2}coins/cashback/`;
export const getHistoryCashback = `${BASE_API_V2}earnings/cashback/`;
export const getCashbackEstimation = `${BASE_API_V2}earnings/cashback/estimate/`;
export const getCashbackTotal = `${BASE_API_V2}earnings/cashback/total-received/`;

//Contacts
export const changeContact = (id) => `${BASE_API_V2}wallets/contact/${id}/`;
export const getPriceCoinsNotMXN = (coin) =>
    `${COINGECKO_API_BASE_URL}simple/price?ids=bitcoin,dash,stellar,bitcoin-cash,nem,litecoin,zcash&vs_currencies=${coin}`;
export const getHistoryCoinsMXN = (coin, days) =>
    `${COINGECKO_API_BASE_URL}coins/${coin}/market_chart?vs_currency=mxn&days=${days}`;
export const getCombinedBalance = (coin) =>
    `${BASE_API_V1}data/totalcombinatedbalance/?coin=${coin}`;
export const getTransfersHistory = (coin) =>
    `${BASE_API_V1}data/transfershistory/?coin=${coin}`;
export const getActivity = (coin) =>
    `${BASE_API_V2}wallets/activity/?coin=${coin}&limit=50&offset=0`;
export const getDepositAddress = (coin) =>
    `${BASE_API_V1}data/getdepositaddress/?coin=${coin}`;
export const pushNotificationToken = `${BASE_API_V2}device/firebase_id/`;
// KYC endpoints
export const getDataByCurp = `${BASE_API_V2}get-data-by-curp/`;
export const kyc = `${BASE_API_V3}kyc/`;
//Forgot password
export const forgotPassword = `${BASE_API_V2}forgot-password/`;
export const checkCodeForgotPassword = `${BASE_API_V2}check-forgot-password-code/`;
//Level up
export const levelUp = `${BASE_API_V2}kyc/upgrade-cacao-level/`;
