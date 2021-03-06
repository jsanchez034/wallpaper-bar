/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import BehanceImagesPage from './containers/BehanceImagesPage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={BehanceImagesPage} />
    </Switch>
  </App>
);
