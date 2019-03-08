import {
  take,
  takeLatest,
  fork,
  put,
  select,
  cancel,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

// import Api from 'utils/Api';
// import * as types from './constants';
// import * as actions from './actions';
// import { makeSelectToken } from './selectors';

function* redirectOnSuccess() {
  // yield take(types.LOGOUT_SUCCESS);
  // localStorage.clear();
  // yield put(actions.setUser(null));
  // yield put(actions.setToken(''));
}

function* logoutFlow() {
  // const successWatcher = yield fork(redirectOnSuccess);
  // const token = yield select(makeSelectToken());
  // yield fork(Api.delete('user/logout', actions.logoutSuccess, actions.logoutFailure, token));
  // yield take([LOCATION_CHANGE, types.LOGOUT_FAILURE]);
  // yield cancel(successWatcher);
}

// Individual exports for testing
export default function* defaultSaga() {
  // yield takeLatest(types.LOGOUT_REQUEST, logoutFlow);
}
