
import { createSelector } from 'reselect';

/**
 * Direct selector to the exampleContainer state domain
 */
const selectDomain = (state) => state.get('exampleContainer');

/**
 * Other specific selectors
 */
const makeSelectSuccess = () => createSelector(selectDomain, (state) => state.get('success'));
const makeSelectResponse = () => createSelector(selectDomain, (state) => state.get('response'));
const makeSelectError = () => createSelector(selectDomain, (state) => state.get('error'));
const makeSelectRequesting = () => createSelector(selectDomain, (state) => state.get('requesting'));
const makeSelectAllBlogResult = () => createSelector(selectDomain, (state) => state.get('dataObj'));

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectRequesting,
  makeSelectError,
  makeSelectAllBlogResult
};
