import { isString } from "lodash";



export const validateFormat = (value) => {
    if (
        value === "0." ||
        value === "0.0" ||
        value === "0.00" ||
        value === "0.000" ||
        value === "0.0000" ||
        value === "0.00000" ||
        value === "0.000000" ||
        value === "0.0000000" ||
        value === "0.00000000"
    ) {
        return true;
    }
};


export const fixedStr2 = (value) => {
    if (isString(value)) {
        return value.substring(0, value.indexOf('.') + 3)
    }
    else {
        return value.toFixed(2)
    }
}