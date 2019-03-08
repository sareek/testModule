/**
 *
 * MainDashboard
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
// import makeSelectMainDashboard from './selectors';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { push } from 'react-router-redux';
/* eslint-disable react/prefer-stateless-function */
export class MainDashboard extends React.Component {
  state = {};

  componentDidMount(){
    if(!localStorage.token) {
         this.props.redirect('/login')
    }
  }
  render() {
    const {} = this.state;
    const {} = this.props;
    return (
      <div>
        <Helmet>
          <title>MainDashboard</title>
          <meta name="description" content="Description of MainDashboard" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MainDashboard.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const mapDispatchToProps = (dispatch) => ({
  redirect:(url)=>dispatch(push(url))
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'mainDashboard', reducer });
const withSaga = injectSaga({ key: 'mainDashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MainDashboard);
