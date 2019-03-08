import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';

// import ComingSoonPage from 'containers/ComingSoonPage';
// import Dashboard from '../containers/Dashboard/Admin';
import Dashboard from '../containers/DashboardPage/';

const AdminRoutes = props => {
  const { location } = props;
  return (
    <Switch location={location}>
      {/* <Route
                exact
                path="/admin/dashboard/blog-category"
                component={BlogCategoryPage}
            /> */}

      {/* <Route exact path="/admin/dashboard/blog-category/create" component={BlogCategoryCreatePage} />
            <Route exact path="/admin/dashboard/blog-category/edit/:category_id" component={BlogCategoryCreatePage} />

            <Route exact path="/admin/dashboard/blogs" component={ComingSoonPage} />
            <Route exact path="/admin/dashboard/blog-comment-review" component={ComingSoonPage} /> */}
      <Route exact path="/admin/dashboard" component={Dashboard} />
      <Redirect from="*" to="/admin/dashboard" />
    </Switch>
  );
};

AdminRoutes.propTypes = {
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(mapStateToProps)(AdminRoutes);
