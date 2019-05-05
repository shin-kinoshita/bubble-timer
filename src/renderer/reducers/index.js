import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import mode from './mode';
import remainedTime from './remainedTime';
import bubbles from './bubbles';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  mode,
  remainedTime,
  bubbles,
});

export default rootReducer;
