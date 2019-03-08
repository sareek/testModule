import { take, takeLatest, fork, call, put, select } from 'redux-saga/effects'; // Individual exports for testing export default function*
// defaultSaga() { // See example in containers/HomePage/saga.js }

import { LOCATION_CHANGE, push} from "react-router-redux";

import Api from 'utils/Api';
import {makeSelectToken} from 'containers/App/selectors';

import * as types from './constants';
import * as actions from './actions';

function* redirectOnSuccess() {
    yield take(types.DEFAULT_ACTION);
    //executed on successful action
    console.log('ddd')
    yield put(push("/dashboard"));
}

function* defaultActionService(action) {
    const token = yield select(makeSelectToken());
    const {payload} = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
        Api.post(
            `api/some-api-url`,
            actions.defaultActionSuccess,
            actions.defaultActionFailure,
            {some: 'data'},
            token
        )
    );
    yield take([LOCATION_CHANGE, types.DEFAULT_ACTION_FAILURE]);
    yield cancel(successWatcher);
}

function* registerUser(action) {
   // const token = yield select(makeSelectToken());
    const {payload} = action;
    console.log('inside saga',payload)
   //const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
        Api.post(
            `customer`,
            actions.registerRequestSuccess,
            actions.registerRequestFailure,
            payload
                         
        )
    );
     //yield take([LOCATION_CHANGE, types.DEFAULT_ACTION_FAILURE]);
     // yield cancel(successWatcher);
}

// Individual exports for testing
export default function* defaultSaga() {
    yield takeLatest(types.DEFAULT_ACTION_REQUEST, defaultActionService);
    yield takeLatest(types.REGISTER_REQUEST, registerUser);
}