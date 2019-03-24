import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import mode from './mode';
import remainedTime from './remainedTime';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  mode,
  remainedTime,
});

export default rootReducer;
