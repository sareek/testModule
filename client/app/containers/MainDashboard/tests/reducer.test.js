import { fromJS } from 'immutable';
import mainDashboardReducer from '../reducer';

describe('mainDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(mainDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
