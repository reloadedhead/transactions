import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const ContentRouter = () => (
  <Switch>
    <Route path="/inout" component={() => <div>Hello World!</div>} />
    <Redirect to="/inout" />
  </Switch>
);

export default ContentRouter;
