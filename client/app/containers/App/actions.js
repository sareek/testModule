/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import action from 'utils/action';
import * as types from './constants';
/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
// export function loadRepos() {
//   return {
//     type: LOAD_REPOS,
//   };
// }

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
// export function reposLoaded(repos, username) {
//   return {
//     type: LOAD_REPOS_SUCCESS,
//     repos,
//     username,
//   };
// }

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
// export function repoLoadingError(error) {
//   return {
//     type: LOAD_REPOS_ERROR,
//     error,
//   };
// }

export const setDialog = action(types.SET_DIALOG, 'dialog');

/**
 * sets the user
 *
 * @param  {object} user The userInfo
 *
 * @return {object}       An action object with a type of SET_USER passing the user
 */
export const setUser = action(types.SET_USER, 'user');

/**
 * sets the token
 *
 * @param  {string} user The Authentication token
 *
 * @return {object}       An action object with a type of SET_TOKEN passing the token
 */
export const setToken = action(types.SET_TOKEN, 'token');

export const logoutRequest = action(types.LOGOUT_REQUEST);
export const logoutSuccess = action(types.LOGOUT_SUCCESS, 'response');
export const logoutFailure = action(types.LOGOUT_FAILURE, 'error');

export const incrementLoading = action(types.INCREMENT_LOADING);
export const decrementLoading = action(types.DECREMENT_LOADING);

export const initializeRequest = action(types.INITIALIZE_REQUEST);
export const initializeSuccess = action(types.INITIALIZE_SUCCESS);
export const initializeFailure = action(types.INITIALIZE_FAILURE, 'error');

export const loadIntroToolRequest = action(types.LOAD_INTRO_TOOL_REQUEST);
export const loadIntroToolSuccess = action(
  types.LOAD_INTRO_TOOL_SUCCESS,
  'response',
);
export const loadIntroToolFailure = action(
  types.LOAD_INTRO_TOOL_FAILURE,
  'error',
);

export const postIntroToolRequest = action(types.POST_INTRO_TOOL_REQUEST);
export const postIntroToolSuccess = action(
  types.POST_INTRO_TOOL_SUCCESS,
  'response',
);
export const postIntroToolFailure = action(
  types.POST_INTRO_TOOL_FAILURE,
  'error',
);

export const showDialog = action(types.SHOW_DIALOG, 'dialog');
export const setToast = action(types.SET_TOAST, 'toast');

export const updateFirstLoadRequest = action(types.UPDATE_FIRST_LOAD_REQUEST);
export const updateFirstLoadSuccess = action(types.UPDATE_FIRST_LOAD_SUCCESS);
