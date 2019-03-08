/*
 *
 * SignUp actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

import { REGISTER_REQUEST } from './constants';

export const defaultAction = action(types.DEFAULT_ACTION);

export const defaultActionRequest = action(types.DEFAULT_ACTION_REQUEST, 'payload');
export const defaultActionSuccess = action(types.DEFAULT_ACTION_SUCCESS, 'response');
export const defaultActionFailure = action(types.DEFAULT_ACTION_FAILURE, 'error');


export const registerRequest = action(types.REGISTER_REQUEST, 'payload');
export const registerRequestSuccess = action(types.REGISTER_REQUEST_SUCCESS, 'response');
export const registerRequestFailure = action(types.REGISTER_REQUEST_FAILURE, 'error');



// export function registerRequest(data) {
//     console.log('inside action for register request')
//     return {
//       type: REGISTER_REQUEST,
//       data
//     };
//   }
 
