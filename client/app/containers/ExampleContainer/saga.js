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
    yield put(push("/next-route"));
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

function* getAllBlogRequest(action){
    yield fork(
        Api.get(
            `blog`,
            actions.getAllBlogSuccess,
            actions.getAllBlogFailure,
        )
    )
}

// Individual exports for testing
export default function* defaultSaga() {
    // yield takeLatest(types.DEFAULT_ACTION_REQUEST, defaultActionService);
    yield takeLatest(types.GET_ALL_BLOG_REQUEST, getAllBlogRequest);
}