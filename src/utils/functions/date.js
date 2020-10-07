// momentjs
import moment from "moment";

export const formatDate = (value) => {
    let date = moment(value || "").format("DD MMM YYYY hh:mm A");
    return date;
};
