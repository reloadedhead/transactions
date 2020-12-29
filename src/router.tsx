import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppShell from './components/app-shell';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={['/inout', '/profile', '/home', '/card']} component={AppShell} />
      <Redirect to="/inout" />
    </Switch>
  </BrowserRouter>
);

export default Router;
