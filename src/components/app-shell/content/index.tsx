import { CircularProgress } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const InOut = lazy(() => import('../../../pages/inout'));

const ContentRouter = () => (
  <Suspense fallback={() => <CircularProgress size={30} />}>
    <Switch>
      <Route path="/inout" component={InOut} />
      <Redirect to="/inout" />
    </Switch>
  </Suspense>
);

export default ContentRouter;
