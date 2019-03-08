/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Grid, Segment, Statistic } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DashboardPage</title>
          <meta name="description" content="Description of DashboardPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <h2>Welcome to Tech A Step - Future begins From Here :)</h2>
        <Grid columns="equal" className="stackable ">
          <Grid.Row>
            <Grid.Column>
              <Segment raised inverted color="green">
                <Statistic>
                  <Statistic.Label>Active Users</Statistic.Label>
                  <Statistic.Value>123</Statistic.Value>
                </Statistic>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised inverted color="teal">
                <Statistic>
                  <Statistic.Label>Categories</Statistic.Label>
                  <Statistic.Value>5</Statistic.Value>
                </Statistic>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised inverted color="blue">
                <Statistic>
                  <Statistic.Label>Views</Statistic.Label>
                  <Statistic.Value>55</Statistic.Value>
                </Statistic>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised inverted color="red">
                <Statistic>
                  <Statistic.Label>Articles</Statistic.Label>
                  <Statistic.Value>100</Statistic.Value>
                </Statistic>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>Trending Article</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardpage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboardPage', reducer });
const withSaga = injectSaga({ key: 'dashboardPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DashboardPage);
