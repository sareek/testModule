
import { createSelector } from 'reselect';

/**
 * Direct selector to the signUp state domain
 */
const selectDomain = (state) => state.get('signUp');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () => createSelector(selectDomain, (state) => state.get('success'));
const makeSelectResponse = () => createSelector(selectDomain, (state) => state.get('response'));
const makeSelectError = () => createSelector(selectDomain, (state) => state.get('error'));
const makeSelectRequesting = () => createSelector(selectDomain, (state) => state.get('requesting'));

const makeSelectRegisterSuccess = () => createSelector(selectDomain, (state) => state.get('grantedBit'));

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectRequesting,
  makeSelectError,
  makeSelectRegisterSuccess
};
