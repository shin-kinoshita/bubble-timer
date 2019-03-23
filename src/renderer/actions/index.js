export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';

export const UPDATE_TIME = 'UPDATE_TIME';

export const startTimer = () => {
  return {
    type: START_TIMER,
    payload: {},
  }
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
    payload: {},
  }
};

export const updateTime = (time) => {
  return {
    type: UPDATE_TIME,
    payload: { time },
  }
};

