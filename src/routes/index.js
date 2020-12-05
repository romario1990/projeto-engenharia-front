import React from 'react';
import Home from '../components/Home';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
