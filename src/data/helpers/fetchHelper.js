// Utils
import Store from "_utils/functions/store";
// import NavigationService from "../../NavigationService";
import { responses } from "../constants/responses";
import { Platform } from "react-native";
import { getSystemVersion } from 'react-native-device-info';

import jwt_decode from "jwt-decode";

const fetchHelper = async (
    url,
    options = {},
    { useToken = true, multipart = false } = {}
) => {
    const version = getSystemVersion();
    const fetchOptions = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Taur-Os": Platform.OS,
            "Taur-App": true,
            "Taur-Version": version,
        },

        ...options,
    };

    let token = await Store.get("token");
    console.log("token", token)
    if (token && useToken) {
        fetchOptions.headers.Authorization = `JWT-V3 ${token}`;
    }

    if (fetchOptions.method !== "GET" && fetchOptions.body && !multipart) {
        fetchOptions.headers["Content-Type"] = "application/json";
        fetchOptions.body = JSON.stringify(fetchOptions.body);
    }

    return fetch(url, fetchOptions).then((response) => {
        if (response.status === 401 && useToken) {
            const dataUser = jwt_decode(token);
            if (!dataUser.has_nip) {
                // NavigationService.navigate("Login");
            } else {
                // NavigationService.navigate("RefreshWithNip", {
                //     message: "sesión expirada",
                //     dataUser,
                // });
            }
        }
        if (response.status >= 400) {
            const error = {
                message: `Bad response from server at ${response.url} => ${response.status
                    }, ${response.statusText}`,
                url: response.url,
                status: response.status,
                statusText: response.statusText,
            };

            return new Promise((resolve, reject) => {
                response
                    .json()
                    .then((message) => {
                        if (message.code in responses) {
                            error.message = responses[message.code];
                            error.msg = responses[message.code];
                        } else {
                            const { msg, msgs } = message;
                            error.message = msg || msgs || message;
                            const non_field_errors =
                                message.non_field_errors || error.message.non_field_errors;

                            if (non_field_errors !== undefined) {
                                const text = non_field_errors[0];
                                error.message = text;
                            }
                        }
                        error.code = message.code;
                        error.response = message;

                        reject(error);
                    })
                    .catch(() => {
                        reject(error);
                    });
            });
        }

        if (response.ok && response.status === 204) {
            return Promise.resolve("Success");
        }
        return new Promise((resolve) => {
            response.json().then(resolve, () => {
                resolve("");
            });
        });
    });
};

export default fetchHelper;
