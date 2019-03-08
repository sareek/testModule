/**
 *
 * Login
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
import { loginRequest } from './actions';
// import makeSelectLogin from './selectors';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess, makeSelectLoginSuccess
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {
  Grid,
  Checkbox,
  Header,
  Form,
  Segment,
  Input,
  Button,
  Message,
  Container,
} from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grantedBit:false,
      user: {
        email: '',
        password: '',
        
      },
      errors: {
         email     :'',
         password  :'',

      },
      submitted: false,
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateAll = this.validateAll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
   
    if(nextProps.loginInfo) {
      console.log('will receive props for login', nextProps.loginInfo.toJS().data.success)
      // this.setState(state => ({
      //   loginInfo: nextProps.loginInfo
      // }))
      localStorage.setItem('token', nextProps.loginInfo.toJS().data.success);

      //check for token
      if(localStorage.token){

         console.log('yippee login')
         // push('/dashboard');
          this.props.history.push('/dashboard')
        }
    }
  }

  handleChange(event) {
   // console.log('change')
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    },()=>{
      console.log('handle change',user.email)
    });

  }

  validateEmail = (email) => {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   // console.log('validate email function', re.test(email))
    return re.test(email);
  }

 validateAll=()=> {
const {user} = this.state
const {errors} =this.state
  if(!user.first_name) {
    errors.first_name = "name is needed"
  }
  if (!this.validateEmail(this.state.user.email)){
       errors.email='email is not proper'

  }
 }



  handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit')
    this.setState({ submitted: true });
    //this.validateAll
 
    const { user } = this.state;
    

    if (user.email && user.password) {

      const data = {
      
        username        : user.email,
        password      : user.password,

      }
      console.log(data)
      //debugger
      this.props.loginRequest(data)
    
    
    }
  }
  render() {
    const {} = this.state;
    const {} = this.props;
    const { user, submitted } = this.state;
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
      
        <Form>





        <Form.Input


          label='Username'
          type='email'
          placeholder='Email'
          name="email"
          //validate={this.validateEmail}
         // errorMessage="Email is invalid"
          value={user.email}
          onChange={this.handleChange}
         // error={user.emailError}
        />

        {submitted && !user.email &&
          <Message negative><p>Email is required</p></Message>
            }

        <Form.Input
          label="Password"

          type='password'
          placeholder='Password'
          name="password"
          value={user.password}
          onChange={this.handleChange}
         // error={user.passwordError || user.passwordMatchError}
        />

        {submitted && !user.password &&
          <Message negative><p>Password is required</p></Message>
        }






         



        <Button
        color='teal'
          onClick={this.handleSubmit}
          type='submit'>Submit</Button>

      </Form>
      </div>
    );
  }
}

Login.propTypes = {
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
  loginInfo:makeSelectLoginSuccess()
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: data => dispatch(loginRequest(data)) 
  
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Login);
