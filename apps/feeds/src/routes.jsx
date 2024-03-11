import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/feeds" exact>
        <Home />
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
}

export default Routes;
