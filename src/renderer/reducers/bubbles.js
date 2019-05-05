import { GENERATE_BUBBLE, UPDATE_BUBBLE } from '../actions';

const initBubbleData = () => {
  let bubbles = [];
  for (let i = 0; i < 50; i++) {
    bubbles[i] = new Bubble(0, 0, false);
  }
  return bubbles;
};

class Bubble {
  constructor(posX, posY, visible) {
    this.posX = posX;
    this.posY = posY;
    this.visible = visible;
  }

  updateState(posX, posY, visible) {
    this.posX = posX;
    this.posY = posY;
    this.visible = visible;
  }
}

const initialState = {
  bubbleData: initBubbleData(),
  visibleCount: 0,
};

const bubbles = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GENERATE_BUBBLE:
      let bubbles = state.concat();
      bubbles[payload.index].updateState(payload.posX, payload.posY, payload.visible);
      return bubbles;
    case UPDATE_BUBBLE:
      const { index, posX, posY, visible } = payload;
      let bubbleData = state.bubbleData.concat();
      let visibleCount = state.visibleCount;

      bubbleData[index].updateState(posX, posY, visible);
      if (visible !== state.bubbleData[index].visible) {
        visibleCount = visible ? visible + 1 : visibleCount - 1;
      }
      return {
        bubbleData,
        visibleCount,
      };
    default:
      return state;
  }
};

export default bubbles;
