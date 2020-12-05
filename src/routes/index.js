import React from 'react';
import Home from '../components/Home';
import RedefinirSenha from '../components/RedefinirSenha';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/redefinirsenha" component={RedefinirSenha} />
    </Switch>
  </Router>
);

export default Routes;
