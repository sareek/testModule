/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import Toaster from 'components/Toaster';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from '../LoginPage/Loadable';

import LoginCustom from '../auth/Login/Loadable';

import AdminDashboard from '../Dashboard/Admin';
import MainDashboard from '../MainDashboard/Loadable';
import ExamplePage from '../ExampleContainer/Loadable';

import SignUp from '../auth/SignUp/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';
import GuestRoute from 'components/Routes/GuestRoute';
import UserRoute from 'components/Routes/UserRoute';

import Navbar from 'components/H2';

import {
  makeSelectDialog,
  makeSelectLocation,
  makeSelectError,
  makeSelectResponse,
} from './selectors';

import saga from './saga';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = props => {
  let message;
  const { location, dialog, errorResponse, successResponse } = props;
  if (successResponse) {
    message = <Toaster message={successResponse} success />;
  }
  if (errorResponse) {
    message = <Toaster message={errorResponse} error />;
  }
  return (
    <AppWrapper>

      <Helmet
        titleTemplate="%s - BitsBeat Boilerplate"
        defaultTitle="BitsBeat Boilerplate"
      >
        <meta name="description" content="A BitsBeat Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <Navbar />
      {message}
      {dialog && dialog.size > 0 && dialog.toJS()}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/example" component={ExamplePage} />
        {/* <Route path="/admin/dashboard" component={AdminDashboard} /> */}
        <Route path="/signup" component={SignUp} />  
        <Route path="/dashboard" component={MainDashboard} />  
        <GuestRoute
          exact
          location={location}
          path="/login"
          component={LoginCustom}
        />
        {/* <UserRoute
          location={location}
          path="/admin/dashboard"
          component={MainDashboard}
        /> */}

         {/* <UserRoute
          location={location}
          path="/dashboard"
          component={MainDashboard}
        /> */}

        {/* <Route exact path="/dashboard" render={(props) => (
          haslocalStorageToken() ? (
            <MainDashboard {...props} />
          ) : (
            <Redirect to="/login"/>
          )
        )}/> */}

        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </AppWrapper>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
  dialog: PropTypes.object,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dialog: makeSelectDialog(),
  location: makeSelectLocation(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const withSaga = injectSaga({ key: 'global', saga });
const withConnect = connect(mapStateToProps);

export default compose(
  withSaga,
  withConnect,
)(App);
