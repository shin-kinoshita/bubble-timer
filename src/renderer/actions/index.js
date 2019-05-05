export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const UPDATE_TIME = 'UPDATE_TIME';

export const GENERATE_BUBBLE = 'BUBBLE_GENERATE';

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

export const generateBubble = (posX, posY) => {
  return {
    type: GENERATE_BUBBLE,
    payload: {
      posX,
      posY,
    }
  }
};
