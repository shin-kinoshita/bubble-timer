import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { START_TIMER, STOP_TIMER, UPDATE_TIME, RESET_TIMER } from '../actions';

export const MEASURING_MODE = 'MEASURING_MODE';
export const STOP_MODE = 'STOP_MODE';

const mode = (state = STOP_MODE, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_TIMER:
      return MEASURING_MODE;
    case STOP_TIMER:
      return STOP_MODE;
    case RESET_TIMER:
      return STOP_MODE;
    case UPDATE_TIME:
      return payload.time < 1 ? STOP_MODE : state;
    default:
      return state;
  }
};

const remainedTime = (state = 5, action) => {
  const { type, payload } = action;
  switch (type) {
    case RESET_TIMER:
      return 5;
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
