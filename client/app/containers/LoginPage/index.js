/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Grid,
  Header,
  Form,
  Segment,
  Input,
  Button,
  Message,
  Container,
} from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Toaster from 'components/Toaster';
import { loginRequest } from './actions';
import {
  makeSelectRequesting,
  makeSelectError,
  makeSelectResponse,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

class LoginPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    data: {},
    errors: {},
  };
  handleChange = (e, { name, value }) => {
    this.setState(state => ({
      data: {
        ...state.data,
        [name]: value,
      },
    }));
  };
  validate = () => {
    const errors = {};
    const { data } = this.state;
    if (!data.username) errors.username = "Can't be empty";
    if (!data.password) errors.password = "Can't be empty";
    return errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.login(this.state.data);
    }
  };
  /* for other input fields */
  // onChange = (e) => {
  //   e.persist();
  //   const { name, value } = e.target;
  //   this.setState((state) => ({
  //     data: {
  //       ...state.data,
  //       [name]: value,
  //     },
  //   }));
  // };
  render() {
    const { data, errors } = this.state;
    const { isRequesting, errorResponse, successResponse } = this.props;
    let message;
    if (successResponse) {
      message = <Toaster message={successResponse} success timeout={5000} />;
    }
    if (errorResponse) {
      message = <Toaster message={errorResponse} error timeout={5000} />;
    }
    return (
      <Container>
        <Grid className="middle aligned" centered>
          <Grid.Column>
            {message}
            <Header>
              <FormattedMessage {...messages.header} />
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Field>
                  <Input
                    name="username"
                    icon="user"
                    iconPosition="left"
                    error={!!errors.username}
                    placeholder="E-mail address"
                    onChange={this.handleChange}
                    value={data.username || ''}
                  />
                  {errors.username && (
                    <Message warning header={errors.username} />
                  )}
                </Form.Field>
                <Form.Field>
                  <Input
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    error={!!errors.password}
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange}
                    value={data.password || ''}
                  />
                  {errors.password && (
                    <Message warning header={errors.password} />
                  )}
                </Form.Field>
                <Button
                  size="large"
                  color="teal"
                  fluid
                  type="submit"
                  loading={isRequesting}
                  disabled={isRequesting}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  errorResponse: PropTypes.string.isRequired,
  successResponse: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse(),
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginRequest(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
