import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../style/global';
import Main from '../pages/main';
import Sidebar from '../components/sidebar';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Sidebar />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
