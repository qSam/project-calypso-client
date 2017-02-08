import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

//Import Components
import reducers from './reducers';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Home from './components/home';
import NumberOfMembers from './components/newPool/numberOfMembers';
import MemberContacts from './components/newPool/memberContacts';
import SavingPool from './components/newPool/savingPool';
import ReviewNewPool from './components/newPool/reviewNewPool';
import ListOne from './components/profile/listOne';

//Create Redux Store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Signup} />
      <Route path='home' component={Home} />
      <Route path='signup' component={Signup} />
      <Route path='signin' component={Signin} />
      <Route path='signout' component={Signout} />
      <Route path='listmembers' component={NumberOfMembers} />
      <Route path='membercontacts' component={MemberContacts} />
      <Route path='savingpool' component={SavingPool} />
      <Route path='reviewnewpool' component={ReviewNewPool} />
      <Route path='listone' component={ListOne} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
