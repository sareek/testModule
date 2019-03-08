/**
 *
 * AdminDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Grid } from 'semantic-ui-react';
import { logoutRequest } from '../../App/actions';
import SideNavigation from './components/SideNavigation';
import Routes from './Routes';

class AdminDashboard extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Button onClick={this.props.logout} className="right floated">
              Logout
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <SideNavigation />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

AdminDashboard.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest()),
});

export default connect(
  null,
  mapDispatchToProps,
)(AdminDashboard);
