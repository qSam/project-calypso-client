import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

//Import Components
import Signup from './components/auth/signup';

//Create Redux Store
const store = {};

ReactDOM.render(
  <Provider store={store}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path='signup' component={Signup} />
    </Route>
  </Provider>,
  document.getElementById('root')
);
