/*
 *
 * LoginPage actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const loginRequest = action(types.LOGIN_REQUEST, 'data');
export const loginSuccess = action(types.LOGIN_SUCCESS, 'response');
export const loginFailure = action(types.LOGIN_FAILURE, 'error');
