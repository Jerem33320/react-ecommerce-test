import React from 'react';
import Auth from './Components/Auth';
import Login from './Components/Login';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Shop from './Components/Shop';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users: {}
    }
  }

  render(){
    return(
      <main>
        <h1>Bienvenue sur l'App Shop</h1>
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/auth">S'authentifier</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
      </main>
    )
  }
}
