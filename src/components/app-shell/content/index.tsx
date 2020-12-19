import { CircularProgress } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const ContentRouter = () => (
  <Switch>
    <Route path="/inout" component={() => <div>Hello World!</div>} />
    <Redirect to="/inout" />
  </Switch>
  <Suspense fallback={() => <CircularProgress size={30} />}>
    <Switch>
      <Redirect to="/inout" />
    </Switch>
  </Suspense>
);

export default ContentRouter;
