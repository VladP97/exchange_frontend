//import './assets/css/global.scss';

import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import  Ex  from './pages/Ex/index';
import LoginPage from './pages/auth/loginPage';
import RegistrationPage from './pages/auth/registrationPage';
import RecoveryPasswordPage from './pages/auth/recoveryPasswordPage';
import { store } from './store.js'

class App extends React.Component {


  render() {


    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegistrationPage />
            </Route>
            <Route path="/recovery">
              <RecoveryPasswordPage />
            </Route>
            <Route path="/">
              <Ex />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
ReactDom.render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById('root'),
);
