import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import MainContainer from '/imports/ui/containers/MainContainer.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';
//import Home from '/imports/ui/pages/Home.jsx';

export default () => (
  <Router history={browserHistory}>
    <Route component={MainContainer}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
);
