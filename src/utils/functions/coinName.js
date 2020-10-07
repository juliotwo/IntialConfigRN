export const getCoinName = coin => {
    switch (coin) {
        case "BTC": {
            return "bitcoin";
        }
        case "LTC": {
            return "litecoin";
        }
        case "BCH": {
            return "bitcoin-cash";
        }
        case "XLM": {
            return "stellar";
        }
        case "BEMB": {
            return "bemb";
        }
        case "DASH": {
            return "dash";
        }
        case "ZEC": {
            return "zcash";
        }
        default:
            return "mxn";
    }
};

export const getCoinNameBuyAndSell = coin => {
    switch (coin) {
        case "BCH": {
            return "Bitcoin Cash";
        }
        case "BTC": {
            return "Bitcoin";
        }
        case "LTC": {
            return "Litecoin";
        }
        case "XLM": {
            return "Stellar";
        }
        case "DASH": {
            return "Dash";
        }
        case "ZEC": {
            return "Zcash";
        }
        default:
            return `${coin}`;
    }
};
