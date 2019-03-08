// /**
//  *
//  * SignUp
//  *
//  */

// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
// // import makeSelectSignUp from './selectors';
// import {
//   makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess
// } from './selectors';
// import reducer from './reducer';
// import saga from './saga';
// import messages from './messages';
// // import { withRouter } from 'react-router-dom';

// import { registerRequest } from './actions';

// import {
//   Grid,
//   Checkbox,
//   Header,
//   Form,
//   Segment,
//   Input,
//   Button,
//   Message,
//   Container,
// } from 'semantic-ui-react';

// /* eslint-disable react/prefer-stateless-function */
// export class SignUp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: {
//         first_name: '',
//         last_name:'',

//       //  username: '',
//         email: '',
//         password: '',
//        // confirmpassword: '',
//        // phone: '',
//         nameError: false,
//         emailError: false,
//         passwordError: false,
//         confirmpasswordError: false,
//         passwordMatchError: false,
//         formError: false,
//         createUserError: false

//       },
//       submitted: false
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.validateEmail = this.validateEmail.bind(this);
//   }

//   handleChange(event) {
//    // console.log('change')
//     const { name, value } = event.target;
//     const { user } = this.state;
//     this.setState({
//       user: {
//         ...user,
//         [name]: value
//       }
//     },()=>{
//       console.log('handle change',user.first_name)
//     });
//   }

//   validateEmail = (email) => {

//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     console.log('validate email function', re.test(email))
//     return re.test(email);
//   }




//   handleSubmit(event) {
//     event.preventDefault();
//     console.log('handle submit')
 
//     //console.log(this.state.submitted)
    

//     // let error = false;

//     // if (this.validateEmail(this.state.user.email)) {
//     //   console.log('check success')


//     //   this.setState({
//     //     user: {
//     //       ...user,
//     //       emailError: false
//     //     }
//     //   });


//     // }
//     // else {
//     //   this.setState({
//     //     user: {
//     //       ...user,
//     //       emailError: true
//     //     }
//     //   });

//     //   error = true;
//     // }

//     // if (this.state.user.password.length < 8) {
//     //   this.setState({
//     //     user: {
//     //       ...user,
//     //       passwordError: true
//     //     }
//     //   });
//     //   error = true;
//     // } else {
//     //   this.setState({
//     //     user: {
//     //       ...user,
//     //       passwordError: false
//     //     }
//     //   });
//     // }

//     // if (error) {

//     //   this.setState({
//     //     user: {
//     //       ...user,
//     //       formError: true
//     //     }
//     //   }, () => {
//     //     console.log('sarik checking error status', this.state.user.formError)

//     //   });

//     //   return;

//     // }

//     //  this.setState({formError: false})
//     this.setState({ submitted: true });

//     const { user } = this.state;
    

//     if (user.name && user.username && user.email && user.password && user.confirmpassword && user.phone) {

//       const data = {
      
//         userName : user.username,
//         email    : user.email,
//         password : user.password,
//         phone    : user.phone
//       }
//       console.log(data)
//       //debugger
//       this.props.registerRequest(data)
    
    
//     }
//   }
//   render() {

//     const { registering } = this.props;
//     const { user, submitted } = this.state;
//     return (
//       <div>
//       <Helmet>
//         <title>Register</title>
//         <meta name="description" content="Description of Register" />
//       </Helmet>
//       <Form>
//         {/* {this.state.user.formError
//           ?
//           <Message
//             error
//             header="Please fill in the details properly"
//             content="Your email address may not be valid or password may be less tha 8 charaters long"
//           />
//           :
//           null

//         } */}

//         <Form.Field>
//           <label>First Name</label>
//           <input
//             placeholder='First Name'
//             name="first_name"
//             value={user.first_name}
//             onChange={this.handleChange}
//           />
//           {submitted && !user.name &&
//             <Message negative><p>First name is required</p></Message>
//           }
//         </Form.Field>

//         <Form.Field>
//           <label>Last Name</label>
//           <input
//             placeholder='Last Name'
//             name="last_name"
//             value={user.last_name}
//             onChange={this.handleChange}
//           />
//           {submitted && !user.name &&
//             <Message negative><p>Last name is required</p></Message>
//           }
//         </Form.Field>
//         {/* <Form.Input
              
//                 label='Full Name'
//                 placeholder='Full Name'
//                 name="name"
//                 value={user.name}
//                 onChange={this.handleChange}
                
//               /> */}


//         {/* <Form.Input

//           label="Username"
//           placeholder='Username'
//           name="username"
//           value={user.username}
//           onChange={this.handleChange}
//         />
//         {submitted && !user.username &&
//           <Message negative><p>Username is required</p></Message>
//         } */}

//         <Form.Input


//           label='Email'
//           type='email'
//           placeholder='Email'
//           name="email"
//           value={user.email}
//           onChange={this.handleChange}
//           error={user.emailError}
//         />

//         {submitted && !user.email &&
//           <Message negative><p>Email is required</p></Message>
//         }

//         <Form.Input
//           label="Password"

//           type='password'
//           placeholder='Password'
//           name="password"
//           value={user.password}
//           onChange={this.handleChange}
//           error={user.passwordError || user.passwordMatchError}
//         />
//         {submitted && !user.password &&
//           <Message negative><p>Password is required</p></Message>
//         }

//         {/* <Form.Input

//           label='Re-Enter Password'
//           type='password'
//           placeholder='Re-enter Password'
//           name="confirmpassword"
//           value={user.confirmpassword}
//           onChange={this.handleChange}
//         />
//         {submitted && !user.confirmpassword &&
//           <Message negative><p>Re-enter Password</p></Message>
//         } */}

//         {/* <Form.Input

//           label='Phone Number'
//           type='number'
//           maxLength="10"
//           placeholder='Phone Number'
//           name="phone"
//           value={user.phone}
//           onChange={this.handleChange}
//         /> */}



//         {/* {submitted && !user.phone &&
//           <Message negative><p>Phone Number is required</p></Message>

//         } */}



//         <Button
//         color='teal'
//           onClick={this.handleSubmit}
//           type='submit'>Submit</Button>
//         {/* <Form.Button
//           fluid
//           color='teal'
//           type='submit'
//           disabled={
//             !user.name
//             || !user.username
//             || !user.email
//             || !user.password
//             || !user.confirmpassword
//             || !user.phone
//           }
//         >
//           fffff
//               </Form.Button> */}
//       </Form>
//     </div>
//     );
//   }
// }

// SignUp.propTypes = {
//   isRequesting: PropTypes.bool.isRequired,
//   isSuccess: PropTypes.bool.isRequired,
//   errorResponse: PropTypes.string.isRequired,
//   successResponse: PropTypes.string.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   isRequesting: makeSelectRequesting(),
//   isSuccess: makeSelectSuccess(),
//   errorResponse: makeSelectError(),
//   successResponse: makeSelectResponse(),
// });

// const mapDispatchToProps = (dispatch) => ({
//   registerRequest: data => dispatch(registerRequest(data)) 
  
// })

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );

// const withReducer = injectReducer({ key: 'signUp', reducer });
// const withSaga = injectSaga({ key: 'signUp', saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect
// )(SignUp);
