import React from 'react';
import { Route } from 'react-router-dom';

const LoginLayout = ({ children, ...rest }) => (
  <div className="page page-login">
    <div className="main">{children}</div>
  </div>
);

const LoginLayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <LoginLayout>
        <Component {...matchProps} />
      </LoginLayout>
    )}
  />
);

export default LoginLayoutRoute;
