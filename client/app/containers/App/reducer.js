/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import * as types from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: '',
  currentUser: false,
  userData: {
    repositories: false,
  },
  requesting: false,
  success: false,
  response: '',
  dialog: null,
  user: null,
  token: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    // case LOAD_REPOS:
    //   return state
    //     .set('loading', true)
    //     .set('error', false)
    //     .setIn(['userData', 'repositories'], false);
    // case LOAD_REPOS_SUCCESS:
    //   return state
    //     .setIn(['userData', 'repositories'], action.repos)
    //     .set('loading', false)
    //     .set('currentUser', action.username);
    // case LOAD_REPOS_ERROR:
    //   return state.set('error', action.error).set('loading', false);
    case types.SET_DIALOG:
      return state.merge({ dialog: fromJS(action.dialog) });
    case types.SET_USER:
      return state.merge({ user: fromJS(action.user) });
    case types.SET_TOKEN:
      return state.merge({ token: action.token });
    case types.LOGOUT_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        error: '',
        response: '',
      });
    case types.LOGOUT_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        error: action.error.message,
      });
    case types.LOGOUT_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
      });
    default:
      return state;
  }
}

export default appReducer;
