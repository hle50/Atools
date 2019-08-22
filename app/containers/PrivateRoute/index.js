import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectIsAuthenticated } from '../App/selectors';
function PrivateRoute(props) {
  const { component: Component, isAuthenticated, ...rest } = props;
  if (isAuthenticated) {
    return <Route {...rest} render={() => <Component {...props} />} />;
  }
  return (
    <Redirect
      {...rest}
      to={{
        pathname: '/',
        state: { from: props.location },
      }}
    />
  );
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  location: PropTypes.any,
  component: PropTypes.any,
};

export function mapDispatchToProps() {
  return {};
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PrivateRoute);
