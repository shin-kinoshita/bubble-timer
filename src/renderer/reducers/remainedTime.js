import { UPDATE_TIME, RESET_TIMER } from '../actions';

const initialState = {
  minutes: 1,
  seconds: 5,
};

const remainedTime = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RESET_TIMER:
      return initialState;
    case UPDATE_TIME:
      return {
        minutes: payload.minutes,
        seconds: payload.seconds,
      };
    default:
      return state;
  }
};

export default remainedTime;
