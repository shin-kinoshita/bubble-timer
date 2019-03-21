import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';

const appRouting = (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
    </Switch>
  </HashRouter>
);

render(appRouting, document.getElementById('app'));
