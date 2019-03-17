import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

require('dotenv').config();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
