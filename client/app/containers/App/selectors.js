/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, state => state.get('location').toJS());
const makeSelectIsAuthenticated = () =>
  createSelector(selectGlobal, state => !!state.get('token'));
const makeSelectToken = () =>
  createSelector(selectGlobal, state => state.get('token'));
const makeSelectDialog = () =>
  createSelector(selectGlobal, state => state.get('dialog'));
const makeSelectRequesting = () =>
  createSelector(selectGlobal, state => state.get('requesting'));
const makeSelectSuccess = () =>
  createSelector(selectGlobal, state => state.get('success'));
const makeSelectError = () =>
  createSelector(selectGlobal, state => state.get('error'));
const makeSelectResponse = () =>
  createSelector(selectGlobal, state => state.get('response'));
export {
  makeSelectLocation,
  makeSelectIsAuthenticated,
  makeSelectToken,
  makeSelectDialog,
  makeSelectRequesting,
  makeSelectSuccess,
  makeSelectError,
  makeSelectResponse,
};
