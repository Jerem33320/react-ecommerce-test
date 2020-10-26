import React from 'react';
import Auth from './Components/Auth';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Shop from './Components/Shop';

const AppRoutes = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path="/auth" component={Auth} />
      <Route path="/login" component={Login} />
      <Route path="/shop" component={Shop} />
    </div>
  </Router>
)

export default AppRoutes;