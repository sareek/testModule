/**
 *
 * ExampleContainer
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
// import makeSelectExampleContainer from './selectors';
import {
  makeSelectRequesting,
  makeSelectError,
  makeSelectResponse,
  makeSelectSuccess,
  makeSelectAllBlogResult
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {getAllBlogRequest} from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ExampleContainer extends React.Component {
  state = {
    blog:[]
  };
  componentDidMount() {
    this.props.getAllBlogRequest();
  }
  componentWillReceiveProps(nextProps){
    if(this.props.allBlogResult !== nextProps.allBlogResult){
      // console.log(nextProps.allBlogResult.toJS())
      this.setState(state => ({
        blog : nextProps.allBlogResult.toJS() 
      }))
    }
  }
  render() {
    const {blog} = this.state;
    const {} = this.props;
    return (
      <div>
        <Helmet>
          <title>Example Container</title>
          <meta name="description" content="Description of ExampleContainer" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        {blog && blog.length > 0 && blog.map((blog)=>(
            <h1 key={`${blog._id}`}>{blog.title}</h1>
          )
        )}

      </div>
    );
  }
}

ExampleContainer.propTypes = {
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
  allBlogResult: makeSelectAllBlogResult()
});

const mapDispatchToProps = (dispatch) => ({
  getAllBlogRequest: () => dispatch(getAllBlogRequest())
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'exampleContainer', reducer });
const withSaga = injectSaga({ key: 'exampleContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ExampleContainer);
