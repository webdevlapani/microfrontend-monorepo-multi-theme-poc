import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/schedule/:id">
        <Home />
      </Route>
      <Route path="/schedule">
        <Home />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
}

export default Routes;
