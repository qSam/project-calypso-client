import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

//Import Components
import reducers from './reducers';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Welcome from './components/welcome';
import Home from './components/home';

//Create Redux Store
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path='home' component={Home} />
      <Route path='signup' component={Signup} />
      <Route path='signin' component={Signin} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
