/*
 *
 * ExampleContainer reducer
 *
 */

import { fromJS } from 'immutable';
// import { DEFAULT_ACTION } from './constants';
import * as types from './constants';

const initialState = fromJS({
  requesting: false,
  response: '',
  error: '',
  success: false
});

function exampleContainerReducer(state = initialState, action = {type: ''}) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.GET_ALL_BLOG_REQUEST:
      return state.merge({
        requesting: true,
        response:'',
        error:'',
        success: false
      });
    case types.GET_ALL_BLOG_SUCCESS:
      return state.merge({
        requesting: false,
        response: '',
        error: '',
        success: true,
        dataObj: fromJS(action.response.data.dataList)
      })
    case types.GET_ALL_BLOG_FAILURE:
      return state.merge({
        requesting: false,
        response: '',
        error: action.error.message,
        success: false
      })
    default:
      return state;
  }
}

export default exampleContainerReducer;
