import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import Main from './views/components/Main';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);

sagaMiddleware.run(rootSaga);

const appRouting = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Main}/>
          </Switch>
        </HashRouter>
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(appRouting, document.getElementById('app'));
