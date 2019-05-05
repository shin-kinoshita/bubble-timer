import { GENERATE_BUBBLE } from '../actions';

const initialState = [];

const bubbles = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GENERATE_BUBBLE:
      return state.concat([[payload.posX, payload.posY]]);
    default:
      return state;
  }
};

export default bubbles;
