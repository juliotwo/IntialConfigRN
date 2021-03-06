import { Colors } from "../styles";

export const typeMovement = (value) => {
    switch (value) {
        case "FEE":
            return "Comisión";
        case "DEPOSIT":
            return "Deposito";
        case "WITHDRAWAL":
            return "Retiro";
        case "SPEI_OUT":
            return "Transferencia SPEI enviado";
        case "SPEI_IN":
            return "Transferencia SPEI recibida";
        case "RETURN":
            return "Devolución";
        case "CHARGE":
            return "Cargo";
        case "PURCHASE":
            return "Compra";
        default:
            return value;
    }
};

export const iconMovement = (value) => {
    switch (value) {
        case "FEE":
            return "retiro";
        case "DEPOSIT":
            return "transfer_intern";
        case "WITHDRAWAL":
            return "transfer_intern";
        case "SPEI_OUT":
            return "retiro";
        case "SPEI_IN":
            return "fondeo";
        case "RETURN":
            return "fondeo";
        case "CHARGE":
            return "retiro";
        case "PURCHASE":
            return "retiro";
        default:
            return "fondeo";
    }
};
export const iconColorMovement = (value) => {
    switch (value) {
        case "FEE":
            return Colors.TEXT_DARK;
        case "DEPOSIT":
            return "rgb(86,113,195)";
        case "WITHDRAWAL":
            return "rgb(86,113,195)";
        case "SPEI_OUT":
            return "rgb(15,130,255)";
        case "SPEI_IN":
            return "rgb(15,130,255)";
        case "RETURN":
            return Colors.TEXT_DARK;
        case "CHARGE":
            return Colors.TEXT_DARK;
        case "PURCHASE":
            return Colors.TEXT_DARK;
        default:
            return "rgb(86,113,195)";
    }
};