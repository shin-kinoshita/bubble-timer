export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const UPDATE_TIME = 'UPDATE_TIME';

export const GENERATE_BUBBLE = 'GENERATE_BUBBLE';
export const UPDATE_BUBBLE = 'UPDATE_BUBBLE';

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

export const resetTimer = () => {
  return {
    type: RESET_TIMER,
    payload: {},
  }
};

export const updateTime = (minutes, seconds) => {
  return {
    type: UPDATE_TIME,
    payload: {
      minutes,
      seconds,
    },
  }
};

export const updateBubble = (index, posX, posY, visible) => {
  return {
    type: UPDATE_BUBBLE,
    payload: {
      index,
      posX,
      posY,
      visible,
    }
  }
};
