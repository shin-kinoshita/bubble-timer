import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { START_TIMER, STOP_TIMER, UPDATE_TIME } from '../actions';

const MEASURING_MODE = 'MEASURING_MODE';
const STOP_MODE = 'STOP_MODE';

const mode = (state = STOP_MODE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TIME:
      if (payload.time < 1) {
        return STOP_MODE;
      }
      break;
    case START_TIMER:
      return MEASURING_MODE;
    case STOP_TIMER:
      return STOP_MODE;
    default:
      return state;
  }
};

const remainedTime = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TIME:
      return payload.time;
    default:
      return state;
  }
};

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  mode,
  remainedTime,
});

export default rootReducer;
