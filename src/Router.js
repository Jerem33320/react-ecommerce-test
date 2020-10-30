import React from 'react';
import Auth from './Components/Auth';
import Login from './Components/Login';
import Shop from './Components/Shop';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const AppRoutes = (props) => (
  <Router>
    <div>
      <Route exact path="/auth" component={Auth} />
      <Route path="/login" component={Login} />
      <Route path="/shop" component={Shop} />
    </div>
  </Router>
)

export default AppRoutes;