import { forEach, startsWith } from "lodash";

const RN = require("react-native");

let Dimensions;
let Platform;

try {
    Dimensions = RN.Dimensions;
    Platform = RN.Platform;
} catch (error) {
    Dimensions = {
        get: () => ({ width: 0, height: 0 })
    };
    Platform = {
        OS: "ios"
    };
}

const IPHONE = "iphone";
const ANDROID = "android";

const IPHONE_X_XS = "iphone_x_xs";
const IPHONE_XS_MAX = "iphone_x_smax";
const IPHONE_XR = "iphone_x_r";
const IPHONE_5 = "iphone_5";
const IPHONE_6_7_8 = "iphone_6_7_8";
const IPHONE_6_7_8_PLUS = "iphone_6_7_8_plus";

const ANDROID_S_8_9_AND_8_9_PLUS = "android_s_8_9_and_8_9_plus";

export const devicesKeys = {
    IPHONE_X_XS,
    IPHONE_XS_MAX,
    IPHONE_XR,
    IPHONE_5,
    IPHONE_6_7_8,
    IPHONE_6_7_8_PLUS,
    ANDROID_S_8_9_AND_8_9_PLUS
};

const DEVICES = {
    iphone: {
        ["3_375_812"]: IPHONE_X_XS,
        ["3_414_896"]: IPHONE_XS_MAX,
        ["2_414_896"]: IPHONE_XR,
        ["2_320_568"]: IPHONE_5,
        ["2_375_667"]: IPHONE_6_7_8,
        ["3_414_736"]: IPHONE_6_7_8_PLUS
    },
    android: {
        ["3_360_692"]: ANDROID_S_8_9_AND_8_9_PLUS
    }
};

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export const whichIphoneIs = () => {
    let d = Dimensions.get("window");
    const { scale, width, height } = d;
    return isIOS
        ? DEVICES.iphone[`${scale}_${width}_${height}`] || IPHONE
        : IPHONE;
};

export const whichAndroidIs = () => {
    let d = Dimensions.get("window");
    const { scale, width, height } = d;
    return isAndroid
        ? DEVICES.android[`${scale}_${width}_${height}`] || ANDROID
        : ANDROID;
};

export const whichDeviceIs = () => {
    if (isIOS) {
        return whichIphoneIs();
    } else {
        return whichAndroidIs();
    }
};

export const deviceSupport = devices => {
    const device = whichDeviceIs();
    let styles = {};
    forEach(devices, (deviceStyles, key) => {
        // Needs styles for all devices
        if (device === key || startsWith(device, key)) {
            styles = { ...styles, ...deviceStyles };
        }
    });
    return styles;
};
