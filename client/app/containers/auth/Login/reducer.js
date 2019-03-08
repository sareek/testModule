/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

import {
  DEFAULT_ACTION, 
  LOGIN_REQUEST, 
  LOGIN_REQUEST_FAILURE, 
  LOGIN_REQUEST_SUCCESS } from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false
});

function loginReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.DEFAULT_ACTION_REQUEST:
      return state;
    case types.DEFAULT_ACTION_SUCCESS:
      return state;
    case types.DEFAULT_ACTION_ERROR:
      return state;

      case LOGIN_REQUEST:
      console.log('register request reducer',action.data)
      
      return state.merge({ loginInfo: fromJS(action.data) });  
      
      case LOGIN_REQUEST_SUCCESS:
      //this.props.history.push('/login')
      console.log('login request reducer success', action.response)
      return state.merge({ loginInfo: action.response }); 
      // return state;

      case LOGIN_REQUEST_FAILURE:
      console.log('register request reducer failure',action.error)  
      return state;
    default:
      return state;
  }
}

export default loginReducer;
