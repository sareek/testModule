/**
 *
 * SignUp
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
// import makeSelectSignUp from './selectors';
import {
  makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess, makeSelectRegisterSuccess
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
// import { withRouter } from 'react-router-dom';
//import MainDashboard from '../../MainDashboard/Loadable';

import { registerRequest } from './actions';

import UserRoute from 'components/Routes/UserRoute';
import { Switch, Route } from 'react-router-dom';
import { push } from 'react-router-redux';

import createHistory from "history/createBrowserHistory";

const history = createHistory();

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
import { MainDashboard } from '../../MainDashboard';

/* eslint-disable react/prefer-stateless-function */
export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grantedBit:false,
      user: {
        first_name: '',
        last_name:'',

      //  username: '',
        email: '',
        password: '',
        confirmpassword: '',
        referral_code: '',
        nameError: false,
        emailError: false,
        passwordError: false,
        confirmpasswordError: false,
        passwordMatchError: false,
        formError: false,
        createUserError: false

      },
      errors: {
         first_name:'',
         last_name :'',
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
   
    if(nextProps.grantedBit) {
      console.log('will receive props', nextProps.grantedBit)
      this.setState(state => ({
        grantedBit: nextProps.adds
      }))
      localStorage.setItem('token', nextProps.grantedBit);
      // if (localStorage.getItem("token") === 'true') {
      //   console.log('yippee')
      // }

        //check for token
      if(localStorage.token){
      //   //set auth token header auth
      //   setAuthToken(localStorage.token);
      //   //Decode token and get user info
      //   const decoded=jwt_decode(localStorage.token);
      //   //set user and isAuthenticated
      // store.dispatch(setCurentUser(decoded));
         console.log('yippee')
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

    // if (this.validateEmail(this.state.user.email)) {
    //   console.log('check success')


    //   this.setState({
    //     user: {
    //       ...user,
    //       emailError: false
    //     }
    //   });


    // }
    // else {

    //   this.setState({
    //     user: {
    //       ...user,
    //       emailError: true
    //     }
    //   }, () => {
    //     console.log('inside else block for email error',this.state.user.emailError)
    //   });

    //  // error = true;
    // }
  }

  validateEmail = (email) => {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   // console.log('validate email function', re.test(email))
    return re.test(email);
  }
 validateAll=()=> {
   console.log('validate all called')
const {user} = this.state
const {errors} =this.state
  if(!user.first_name) {
    errors.first_name = "name is needed"
  }
  if (!this.validateEmail(this.state.user.email)){
       errors.email='email is not proper'
       console.log(errors.email)

  } else if(this.validateEmail(this.state.user.email)) {
     errors.email=''
  }
 }



  handleSubmit(event) {
    event.preventDefault();
    console.log('handle submit')
    this.setState({ submitted: true });
    this.validateAll()
 
    //console.log(this.state.submitted)
    

    // let error = false;

    // if (!(this.validateEmail(this.state.user.email))) {
      


    //   this.setState({
    //     user: {
    //       ...user,
    //       emailError: true
    //     }
    //   }, ()=> {
    //     console.log('check email error',this.state.user.emailError)
    //   });


    // }
    // else {

    //   this.setState({
    //     user: {
    //       ...user,
    //       emailError: false
    //     }
    //   }, () => {
    //     console.log('inside else block for email error',this.state.user.emailError)
    //   });

    // //  // error = true;
    //  }

    // if (this.state.user.password.length < 8) {
    //   this.setState({
    //     user: {
    //       ...user,
    //       passwordError: true
    //     }
    //   });
    //   error = true;
    // } else {
    //   this.setState({
    //     user: {
    //       ...user,
    //       passwordError: false
    //     }
    //   });
    // }

    // if (error) {

    //   this.setState({
    //     user: {
    //       ...user,
    //       formError: true
    //     }
    //   }, () => {
    //     console.log('sarik checking error status', this.state.user.formError)

    //   });

    //   return;

    // }

    //  this.setState({formError: false})
    

    const { user } = this.state;
    

    if (user.first_name && user.last_name && user.email && user.password && user.referral_code) {

      const data = {
      
        first_name    : user.first_name,
        last_name     : user.last_name,
        email         : user.email,
        password      : user.password,
        referral_code : user.referral_code
      }
      console.log(data)
      //debugger
      this.props.registerRequest(data)
    
    
    }
  }
  render() {

    const { registering } = this.props;
    const { user, submitted } = this.state;
    const {errors} =this.state
    //const { emailError } = this.state;
    let errorEmail=''

   if(submitted && errors.email!='') {
      errorEmail = <Message negative><p>Email is not proper</p></Message>
   } else if(submitted && !user.email) {
     errorEmail = <Message negative><p>Email is required</p></Message>
   }



    return (
      <div>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Description of Register" />
      </Helmet>

      <Form>
      {/* {submitted && errors.email!='' &&
            <Message negative><p>Email is not proper</p></Message>
          } */}

        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            name="first_name"
            value={user.first_name}
            onChange={this.handleChange}
          />
          {submitted && !user.first_name &&
            <Message negative><p>First name is required</p></Message>
          }
        </Form.Field>

        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            name="last_name"
            value={user.last_name}
            onChange={this.handleChange}
          />
          {submitted && !user.last_name &&
            <Message negative><p>Last name is required</p></Message>
          }
        </Form.Field>


        <Form.Input


          label='Email'
          type='email'
          placeholder='Email'
          name="email"
          //validate={this.validateEmail}
         // errorMessage="Email is invalid"
          value={user.email}
          onChange={this.handleChange}
          error={user.emailError}
        />

        {/* {submitted && !user.email && 
          <Message negative><p>Email is required</p></Message>
        } */}
         {errorEmail}

        <Form.Input
          label="Password"

          type='password'
          placeholder='Password'
          name="password"
          value={user.password}
          onChange={this.handleChange}
          error={user.passwordError || user.passwordMatchError}
        />

        {submitted && !user.password &&
          <Message negative><p>Re-enter Password</p></Message>
         }
        

        <Form.Input

          label='Re-Enter Password'
          type='password'
          placeholder='Re-enter Password'
          name="confirmpassword"
          value={user.confirmpassword}
          onChange={this.handleChange}
        />
        {submitted && !user.confirmpassword &&
          <Message negative><p>Re-enter Password</p></Message>
        }

        <Form.Input

          label='Referral Code'
          type='number'
          maxLength="10"
          placeholder='Phone Number'
          name="referral_code"
          value={user.referral_code}
          onChange={this.handleChange}
        /> 



         {submitted && !user.referral_code &&
          <Message negative><p>Phone Number is required</p></Message>

        }



        <Button
        color='teal'
          onClick={this.handleSubmit}
          type='submit'>Submit</Button>
        {/* <Form.Button
          fluid
          color='teal'
          type='submit'
          disabled={
            !user.name
            || !user.username
            || !user.email
            || !user.password
            || !user.confirmpassword
            || !user.phone
          }
        >
          fffff
              </Form.Button> */}
      </Form>
    </div>
    );
  }
}

SignUp.propTypes = {
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
  grantedBit:makeSelectRegisterSuccess()
});

const mapDispatchToProps = (dispatch) => ({
  registerRequest: data => dispatch(registerRequest(data)) 
  
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'signUp', reducer });
const withSaga = injectSaga({ key: 'signUp', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SignUp);
