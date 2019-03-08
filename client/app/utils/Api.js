import { call, put } from 'redux-saga/effects';
import { API_BASE } from 'containers/App/constants';
import objectToFormData from './objectToFormData';
import request from './request';
// import { logoutSuccess } from 'containers/Login/actions';
import invalidTokenHelper from 'utils/invalidTokenHelper';

class Api {
  /**
   * Generic api data loader
   */
  static dataLoader(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData = '',
    ...actionArguments
  ) {
    return function* commonApiSetup() {
      const baseUrl = API_BASE;
      const requestURL = `${baseUrl}${apiUri}`;
      try {
        let options;
        if (data !== undefined) {
          options = {
            method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Access-Control-Allow-Origin': '*',
              Authorization: token,
            },
          };
        } else {
          options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Access-Control-Allow-Origin': '*',
              Authorization: token,
            },
          };
        }
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, data, metaData, ...actionArguments));
      } catch (err) {
        let error = null;
        try {
          error = yield call(() => err.response.json());
        } catch (a) {
          if (Object.keys(a).length === 0) {
            error = {
              status: 500,
              message: 'There might be internet problem Can you pls check it.',
            };
          } else {
            error = {
              errors: [
                {
                  code: a.response.status,
                  msg: a.response.statusText,
                },
              ],
            };
          }
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }

  static multipartPost(
    apiUri,
    onSuccess,
    onError,
    data,
    document,
    token = '',
    metaData = '',
    ...actionArguments
  ) {
    return function* multiPartApiSetup() {
      const requestURL = `${API_BASE}${apiUri}`;
      let multipartData = new FormData();
      multipartData = objectToFormData(data, multipartData);
      if (Object.prototype.toString.call(document) === '[object Array]') {
        document.map(file => multipartData.append('file', file));
        // for (let i = 0; i < document.length; i++) {
        //   multipartData.append('file', document[i]);
        // }
      } else {
        multipartData.append('file', document);
      }
      try {
        const options = {
          method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
          body: multipartData,
          headers: {
            processData: false,
            contentType: false,
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          if (Object.keys(a).length === 0) {
            error = {
              status: 500,
              message: 'There might be internet problem Can you pls check it.',
            };
          } else {
            error = {
              errors: [
                {
                  code: e.response.status,
                  msg: e.response.statusText,
                },
              ],
            };
          }
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }
  static multipartDirectUpload(apiUri, data, document, token, metaData = '') {
    const requestURL = `${API_BASE}${apiUri}`;
    let multipartData = new FormData();
    multipartData = objectToFormData(data, multipartData);
    if (Object.prototype.toString.call(document) === '[object Array]') {
      document.map(file => multipartData.append('file', file));
    } else {
      multipartData.append('file', document);
    }
    try {
      const options = {
        method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
        body: multipartData,
        headers: {
          processData: false,
          contentType: false,
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: token,
        },
      };
      return fetch(requestURL, options);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /*
     * Shorthand GET function
     */
  static get(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      undefined,
      ...actionArguments,
    );
  }
  /*
     * Shorthand POST function
     */
  static post(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData,
    ...actionArguments
  ) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      token,
      metaData,
      ...actionArguments,
    );
  }
  /*
     * Shorthand PUT function
     */
  static put(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData,
    ...actionArguments
  ) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      token,
      metaData,
      ...actionArguments,
    );
  }
  /*
     * Shorthand PATCH function
     */
  static patch(
    apiUri,
    onSuccess,
    onError,
    data = {},
    token,
    ...actionArguments
  ) {
    return function* patchApiSetup() {
      const requestURL = `${API_BASE}${apiUri}`;
      try {
        const options = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
          body: JSON.stringify(data),
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, ...actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          if (Object.keys(a).length === 0) {
            error = {
              status: 500,
              message: 'There might be internet problem Can you pls check it.',
            };
          } else {
            error = {
              errors: [
                {
                  code: e.response.status,
                  msg: e.response.statusText,
                },
              ],
            };
          }
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }
  /*
     * Shorthand DELETE function
     */
  static delete(apiUri, onSuccess, onError, token, ...actionArguments) {
    return function* deleteApiSetup() {
      const requestURL = `${API_BASE}${apiUri}`;
      try {
        // Call our request helper (see 'utils/request')
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (err) {
          if (Object.keys(err).length === 0) {
            error = {
              status: 500,
              message: 'There might be internet problem Can you pls check it.',
            };
          } else {
            error = {
              errors: [
                {
                  code: e.response.status,
                  msg: e.response.statusText,
                },
              ],
            };
          }
        }
        yield put(onError(error, ...actionArguments));
      }
    };
  }
}

export default Api;
