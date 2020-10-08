//PRIMARY COLORS
export const BITCOIN = ["#FFB938", "#FCD65D"];
export const DAI = ["#F99710", "#F9AA10"];
export const BTC_CASH = ["#99CD46", "#B2DD0A"];
export const MXN = ["#49CC68", "#58E77A"];
export const DASH = ["#0064D9", "#008CE7"];
export const RIPPLE = ["#00388A", "#1658BC"];
export const ETHEREUM = ["#442AB1", "#5941B8"];
export const STELLAR = ["#272B2F", "#3F454A"];
export const LITECOIN = ["#4E5A65", "#6E7B88"];

export const getColorWallet = (coin) => {
    switch (coin) {
        case "BTC": {
            return BITCOIN;
        }
        case "LTC": {
            return LITECOIN;
        }
        case "BCH": {
            return BTC_CASH;
        }
        case "XLM": {
            return STELLAR;
        }
        case "BEMB": {
            return STELLAR;
        }
        case "DASH": {
            return DASH;
        }
        case "ZEC": {
            return BITCOIN;
        }
        case "MXN": {
            return MXN;
        }
        default:
            return "mxn";
    }
};
