/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import DashboardRoute from '../../Routes/DashboardRoute';
import LoginRoute from '../../Routes/LoginRoute';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="AToolz">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <LoginRoute exact path="/" component={HomePage} />
        <DashboardRoute path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
