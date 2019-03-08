/*
 *
 * Login actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const defaultActionRequest = action(types.DEFAULT_ACTION_REQUEST, 'payload');
export const defaultActionSuccess = action(types.DEFAULT_ACTION_SUCCESS, 'response');
export const defaultActionFailure = action(types.DEFAULT_ACTION_FAILURE, 'error');


export const loginRequest = action(types.LOGIN_REQUEST, 'payload');
export const loginRequestSuccess = action(types.LOGIN_REQUEST_SUCCESS, 'response');
export const loginRequestFailure = action(types.LOGIN_REQUEST_FAILURE, 'error');
 
