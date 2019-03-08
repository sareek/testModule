import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */
const selectDomain = state => state.get('loginPage');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () =>
  createSelector(selectDomain, state => state.get('success'));
const makeSelectResponse = () =>
  createSelector(selectDomain, state => state.get('response'));
const makeSelectError = () =>
  createSelector(selectDomain, state => state.get('error'));
const makeSelectRequesting = () =>
  createSelector(selectDomain, state => state.get('requesting'));

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectRequesting,
  makeSelectError,
};
