import React from 'react';
import PrivateRoute from '../containers/PrivateRoute';

const DashboardLayout = ({ children, ...rest }) => (
  <div className="page page-dashboard">
    <div className="sidebar">Sidebar here</div>
    <div className="main">{children}</div>
  </div>
);
const DashboardRoute = ({ component: Component, ...rest }) => (
    <PrivateRoute {...rest}>
    <DashboardLayout>
      <Component {...rest} />
    </DashboardLayout>
  </PrivateRoute>
);

export default DashboardRoute;
