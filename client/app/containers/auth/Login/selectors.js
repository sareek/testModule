
import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectDomain = (state) => state.get('login');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () => createSelector(selectDomain, (state) => state.get('success'));
const makeSelectResponse = () => createSelector(selectDomain, (state) => state.get('response'));
const makeSelectError = () => createSelector(selectDomain, (state) => state.get('error'));
const makeSelectRequesting = () => createSelector(selectDomain, (state) => state.get('requesting'));

const makeSelectLoginSuccess = () => createSelector(selectDomain, (state) => state.get('loginInfo'));

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectRequesting,
  makeSelectError,
  makeSelectLoginSuccess
};
