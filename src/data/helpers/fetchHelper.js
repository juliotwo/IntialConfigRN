// Utils
import AsyncStorage from '_utils/functions/asycStorage';
// import NavigationService from '../../NavigationService';
import { responses } from './responses';
import { Platform } from 'react-native';
import { getSystemVersion } from 'react-native-device-info';

const fetchHelper = async (
  url,
  options = {},
  { useToken = true, multipart = false } = {},
) => {
  const version = getSystemVersion();
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Taur-Os': Platform.OS,
      'Taur-App': true,
      'Taur-Version': version,
    },

    ...options,
  };

  let token = await AsyncStorage.get('token');
  if (token && useToken) {
    fetchOptions.headers.Authorization = `JWT-V3 ${token}`;
  }

  if (fetchOptions.method !== 'GET' && fetchOptions.body && !multipart) {
    fetchOptions.headers['Content-Type'] = 'application/json';
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  return fetch(url, fetchOptions).then((response) => {
    if (response.status === 401 && useToken) {
      // NavigationService.navigate('RefreshWithNip', {
      //   message: 'sesión expirada',
      // });
    }
    if (response.status >= 400) {
      const error = {
        message: `Bad response from server at ${response.url} => ${response.status}, ${response.statusText}`,
        url: response.url,
        status: response.status,
        statusText: response.statusText,
      };

      return new Promise((resolve, reject) => {
        response
          .json()
          .then((res) => {
            if (res.code in responses) {
              error.message = responses[res.code];
            } else {
              const { msg, msgs } = res;
              error.message = msg || msgs || res;
              const non_field_errors =
                res.non_field_errors || error.res.non_field_errors;

              if (non_field_errors !== undefined) {
                const text = non_field_errors[0];
                error.message = text;
              }
            }
            error.code = res.code;
            error.response = res;

            reject(error);
          })
          .catch(() => {
            reject(error);
          });
      });
    }

    if (response.ok && response.status === 204) {
      return Promise.resolve('Success');
    }
    return new Promise((resolve) => {
      response.json().then(resolve, () => {
        resolve('');
      });
    });
  });
};

export default fetchHelper;
