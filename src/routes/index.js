import React from 'react';
import Home from '../components/Home';
import Version from '../components/Version';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/version" component={Version} />
    </Switch>
  </Router>
);

export default Routes;