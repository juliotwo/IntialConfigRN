import { Platform } from "react-native";
import fetch from "./helpers/fetchHelper";
import fxhr from "./helpers/xhr";
import * as urls from "./constants/urls";

export const login = (data) => {
    return fetch(
        urls.login,
        {
            method: "POST",
            body: data,
        },
        {
            useToken: false,
        }
    );
};

export const refreshToken = (data) => {
    return fetch(
        urls.refreshToken,
        {
            method: "POST",
            body: data,
        },
        {
            useToken: false,
        }
    );
};

export const verifyToken = (data) => {
    return fetch(
        urls.verifyToken,
        {
            method: "POST",
            body: data,
        },
        {
            useToken: false,
        }
    );
};

export const twoFactorEmailLogin = (data) => {
    return fetch(
        urls.twoFactorEmailLogin,
        {
            method: "POST",
            body: data,
        },
        {
            useToken: false,
        }
    );
};

export const loginNIP = (email, nip, unique_device_id) => {
    return fetch(
        urls.loginNIP,
        {
            body: {
                email,
                nip,
                unique_device_id,
            },
            method: "POST",
        },
        {
            useToken: false,
        }
    );
};

export const signup = (data) => {
    return fetch(
        urls.signUp,
        {
            body: {
                ...data,
            },
            method: "POST",
        },
        {
            useToken: false,
        }
    );
};

export const verifyEmail = (body) => {
    return fetch(
        urls.verifyEmail,
        {
            body,
            method: "POST",
        },
        {
            useToken: false,
        }
    );
};

export const reSendEmail = (email) => {
    return fetch(
        urls.reSendEmail,
        {
            body: {
                email,
            },
            method: "POST",
        },
        {
            useToken: false,
        }
    );
};

export const twoFactorLogin = (data) => {
    return fetch(
        urls.twoFactorLogin,
        {
            method: "POST",
            body: data,
        },
        {
            useToken: false,
        }
    );
};

export const getCoinPreferent = () => {
    return fetch(
        urls.getCoinPreferent,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const getUserKyc = () => {
    return fetch(
        urls.kyc,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const getCoinsPreferent = () => {
    return fetch(
        urls.getCoinsPreferent,
        {
            method: "GET",
        },
        { useToken: true }
    );
};
export const getCoinsMinimum = () => {
    return fetch(
        urls.getCoinsMinimum,
        {
            method: "GET",
        },
        { useToken: true }
    );
};
export const getLastPriceCoins = () => fetch(urls.getLastPrice);

export const getProfile = () => {
    return fetch(
        urls.getProfile,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const getWallets = () => fetch(urls.getWallets);

export const getPriceCoins = (coin, mxn = false) =>
    mxn ? fetch(urls.getPriceCoinsMXN) : fetch(urls.getPriceCoinsNotMXN(coin));

export const getHistoryCoins = (coin, days) =>
    fetch(urls.getHistoryCoinsMXN(coin, days));

export const getHistoryPrice = (coin, days) =>
    fetch(urls.getHistoryPrice(coin, days));

export const getCombinedBalance = (coin) =>
    fetch(urls.getCombinedBalance(coin));

export const getTransfersHistory = (coin) =>
    fetch(urls.getTransfersHistory(coin));

export const getActivity = (coin) => fetch(urls.getActivity(coin));

export const getDepositAddress = (coin) => fetch(urls.getDepositAddress(coin));

export const getFeeCoin = (coin) =>
    fetch(
        urls.getFeeCoin(
            coin,
            {
                method: "GET",
            },
            { useToken: false }
        )
    );
export const getOrdersMarket = (coin) => fetch(urls.getOrdersMarket(coin));
export const getTrandingFee = (coin) => {
    return fetch(
        urls.getTradingFee(coin),
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const getCoins = () => fetch(urls.getCoins);

export const deleteContact = (id) => {
    return fetch(urls.changeContact(id), {
        method: "DELETE",
    });
};

export const editContact = (id, data) => {
    return fetch(
        urls.changeContact(
            id,
            {
                method: "PATCH",
                body: data,
            },
            { useToken: true }
        )
    );
};

export const createContact = (data) => {
    return fetch(urls.contacts, {
        method: "POST",
        body: data,
    });
};
//Forgot Password
export const forgotPasswordPost = (data) => {
    return fetch(urls.forgotPassword, {
        method: "POST",
        body: data,
    });
};
export const forgotPasswordPut = (data) => {
    return fetch(urls.forgotPassword, {
        method: "PUT",
        body: data,
    });
};
export const checkCodeForgotPassword = (data) => {
    return fetch(urls.checkCodeForgotPassword, {
        method: "POST",
        body: data,
    });
};

export const getContacts = () => {
    return fetch(
        urls.contacts,
        {
            method: "GET",
        },
        { useToken: true }
    );
};
export const getUserActivity = () => {
    return fetch(
        urls.getUserActivity,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const sendFunds = (data) => {
    return fetch(urls.sendFunds, {
        method: "POST",
        body: data,
    });
};

export const sendInnerFunds = (data) => {
    return fetch(urls.sendInnerFunds, {
        method: "POST",
        body: data,
    });
};

export const fiatwithdraw = (data) => {
    return fetch(urls.fiatwithdraw, {
        method: "POST",
        body: data,
    });
};

export const sendDashText = (data) => {
    return fetch(urls.sendDashText, {
        method: "POST",
        body: data,
    });
};

export const sendFundsCoin = (data) => {
    return fetch(urls.sendFundsCoin, {
        method: "POST",
        body: data,
    });
};
export const sendFundsMXN = (data) => {
    return fetch(urls.sendFundsMXN, {
        method: "POST",
        body: data,
    });
};
export const withdrawCard = (data) => {
    return fetch(urls.withdrawaCard, {
        method: "POST",
        body: data,
    });
};
export const taurosTransferCard = (data) => {
    return fetch(urls.taurosTransferCard, {
        method: "POST",
        body: data,
    });
};
export const transferCardToWallet = (data) => {
    return fetch(urls.transferCardToWallet, {
        method: "POST",
        body: data,
    });
};
export const sendFundsTauros = (data) => {
    return fetch(urls.sendFundsTauros, {
        method: "POST",
        body: data,
    });
};
export const sendFundsDash = (data) => {
    return fetch(urls.sendFundsDash, {
        method: "POST",
        body: data,
    });
};

export const transferWalletToCard = (data) => {
    return fetch(urls.postTransferToCard, {
        method: "POST",
        body: data,
    });
};
export const payCard = (data) => {
    return fetch(urls.payCard, {
        method: "POST",
        body: data,
    });
};
export const changeCoinPreferent = (coin) => {
    return fetch(urls.getCoinPreferent, {
        method: "PATCH",
        body: { coin },
    });
};
export const changeCashBackPreferent = (cashback_coin) => {
    return fetch(urls.getCoinPreferent, {
        method: "PATCH",
        body: { cashback_coin },
    });
};

export const changePassword = (data) => {
    return fetch(urls.changePassword, {
        method: "PUT",
        body: data,
    });
};

export const buyAndSell = (data) => {
    return fetch(
        urls.buyAndSell,
        {
            body: {
                amount: data.amount,
                market: `${data.coin}-MXN`,
                side: data.typeOperation,
                type: "market",
                is_amount_value: data.is_amount_value,
            },
            method: "POST",
        },
        {
            useToken: true,
        }
    );
};

export const getCardsTransations = () => {
    return fetch(
        urls.getCardsTransations,
        {
            method: "GET",
        },
        { useToken: true }
    );
};
export const getCardsTransationsURL = (url) => {
    const formatUrl = url && url.slice(0, 4) + "s" + url.slice(4);
    return fetch(
        formatUrl,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const getCards = () => {
    return fetch(
        urls.getCards,
        {
            method: "GET",
        },
        { useToken: true }
    );
};
export const getDespositInfoCard = () => {
    return fetch(
        urls.depositInfoCard,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const requestCard = () => {
    return fetch(
        urls.requestCard,
        {
            method: "POST",
        },
        { useToken: true }
    );
};
export const setAddressDelivered = (data) => {
    return fetch(
        urls.requestCard,
        {
            method: "PUT",
            body: data,
        },
        { useToken: true }
    );
};

export const getCardRequestStatus = () => {
    return fetch(
        urls.getCardRequestStatus,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const lockCard = (data) => {
    return fetch(
        urls.lockCard,
        {
            method: "PUT",
            body: data,
        },
        { useToken: true }
    );
};

export const activateCard = (data) => {
    return fetch(
        urls.activateCard,
        {
            method: "POST",
            body: data,
        },
        { useToken: true }
    );
};

export const getCardColorsList = () => {
    return fetch(
        urls.getCardColorsList,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

export const setCardColor = (data) => {
    return fetch(
        urls.setCardColor,
        {
            method: "POST",
            body: data,
        },
        { useToken: true }
    );
};

export const activateVirtualCard = () => {
    return fetch(
        urls.activateVirtualCard,
        {
            method: "POST",
        },
        { useToken: true }
    );
};

export const getCardNIP = (data) => {
    return fetch(
        urls.getCardNIP,
        {
            method: "POST",
            body: data,
        },
        { useToken: true }
    );
};

export const getCardCVV = (data) => {
    return fetch(
        urls.getCardCVV,
        {
            method: "POST",
            body: data,
        },
        { useToken: true }
    );
};

export const getDataByCurp = (data) => {
    return fetch(
        urls.getDataByCurp,
        {
            body: data,
            method: "POST",
        },
        {
            useToken: true,
        }
    );
};

export const changePhoneNumber = (phone_number, recaptcha) => {
    return fetch(urls.changePhoneNumber, {
        method: "PUT",
        body: {
            phone_number,
            recaptcha,
        },
    });
};

export const verifyPhoneNumber = (code) => {
    return fetch(urls.changePhoneNumber, {
        method: "POST",
        body: {
            code,
        },
    });
};

export const createNip = (nip) => {
    return fetch(urls.nip, {
        method: "POST",
        body: {
            nip,
        },
    });
};

export const updateNip = (data) => {
    return fetch(urls.nip, {
        method: "PUT",
        body: data,
    });
};


export const kycIdentity = (photo) => {
    const formData = new FormData();

    formData.append("id_type", photo.id_type);

    formData.append("id_front_image", {
        name: "front_image.jpeg",
        type: "image/jpeg",
        uri:
            Platform.OS === "android"
                ? photo.id_front_image
                : photo.id_front_image.replace("file://", ""),
    });

    if (photo.id_back_image) {
        formData.append("id_back_image", {
            name: "back_image.jpeg",
            type: "image/jpeg",
            uri:
                Platform.OS === "android"
                    ? photo.id_back_image
                    : photo.id_back_image.replace("file://", ""),
        });
    }

    return fxhr(urls.kyc, {
        method: "PATCH",
        data: formData,
    });
};

export const kyc = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });

    return fxhr(urls.kyc, {
        method: "PATCH",
        data: formData,
    });
};

export const kycSignature = (signature) => {
    const formData = new FormData();

    formData.append("signature_image", signature);

    console.log(formData);

    return fxhr(urls.kyc, {
        method: "PATCH",
        data: formData,
    });
};

export const updateCacaoKyc = (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });

    return fxhr(urls.kyc, {
        method: "PATCH",
        data: formData,
    });
};

export const sendSignature = (signature, isImage) => {
    const formData = new FormData();

    if (isImage) {
        formData.append("signature_image", {
            name: "signature.jpeg",
            type: "image/jpeg",
            uri:
                Platform.OS === "android"
                    ? signature
                    : signature.replace("file://", ""),
        });
    } else {
        formData.append("signature_image", signature);
    }

    return fxhr(urls.kyc, {
        method: "PATCH",
        data: formData,
    });
};

export const checkIp = () => {
    return fetch(
        urls.checkIp,
        {
            method: "GET",
        },
        { useToken: false }
    );
};

export const pushNotifications = (token, deviceId) => {
    return fetch(urls.pushNotificationToken, {
        method: "POST",
        body: {
            firebase_id: token,
            unique_device_id: deviceId,
        },
    });
};

//Api interface caskback
export const getCashbackCoins = () => {
    return fetch(
        urls.getCashbackCoins,
        {
            method: "GET",
        },
        { useToken: true }
    );
};
export const getCashbackTotal = () => {
    return fetch(
        urls.getCashbackTotal,
        {
            method: "GET",
        },
        { useToken: true }
    );
};
export const getHistoryCashback = () => {
    return fetch(
        urls.getHistoryCashback,
        {
            method: "GET",
        },
        { useToken: true }
    );
};
export const getCashbackEstimate = () => {
    return fetch(
        urls.getCashbackEstimation,
        {
            method: "GET",
        },
        { useToken: true }
    );
};

//Level Up

export const postLevelUp = (data) => {
    return fetch(
        urls.levelUp,
        {
            method: "POST",
            body: data
        },
        { useToken: true }
    );
};
export const getLimitAccount = () => {
    return fetch(
        urls.levelUp,
        {
            method: "GET",
        },
        { useToken: true }
    );
};