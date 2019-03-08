/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';


import {
   DEFAULT_ACTION, 
   REGISTER_REQUEST, 
   REGISTER_REQUEST_FAILURE, 
   REGISTER_REQUEST_SUCCESS } from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false
});

function signUpReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.DEFAULT_ACTION_REQUEST:
      return state;
    case types.DEFAULT_ACTION_SUCCESS:
      return state;
    case types.DEFAULT_ACTION_ERROR:
      return state;

      case REGISTER_REQUEST:
      console.log('register request reducer',action)
      
      return state.merge({ user: fromJS(action.data) });  
      
      case REGISTER_REQUEST_SUCCESS:
      //this.props.history.push('/login')
      console.log('register request reducer success', action.response)
      return state.merge({ grantedBit: true }); 

      case REGISTER_REQUEST_FAILURE:
      console.log('register request reducer failure',action.error)
    default:
      return state;
  }
}

export default signUpReducer;
