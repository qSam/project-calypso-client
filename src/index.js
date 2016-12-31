import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

//Import Components
import Signup from './components/auth/signup';
import Welcome from './components/welcome';

//Create Redux Store
const store = {};

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Signup} />
      <Route path='signup' component={Signup} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
