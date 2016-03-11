/**
 * Run app: npm run app
 * https://preview.c9.io/dvnull/development/build/index.html
 */

import React from 'react';
import Router from 'react-router';

import App from './views/App.jsx';
import Actions from './actions/PostFetch.js';
import IndexRoute from './routes/IndexRoute.jsx';
import PersistRoute from './routes/PersistRoute.jsx';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={IndexRoute} />
    <Route name="index" handler={IndexRoute} />
    <Route name="create" handler={PersistRoute} />
    <Route name="update/:id" handler={PersistRoute} />
  </Route>
);

Actions.loadPosts();
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
