import React from 'react';
import { connect } from 'react-redux';

import style from './Bubble.css';
import { Spring, animated } from 'react-spring/renderprops'
import { updateBubble } from '../../actions';
import { MEASURING_MODE } from '../../reducers/mode';

const step = 30;

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.updateBubble = this.updateBubble.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const nextBubble = nextProps.bubbleData[this.props.index];
    const { posX, posY, visible } = this.preInfo;
    console.log('## enter Bubble shouldComponentUpdate');
    console.log(this.props.index);
    console.log(nextBubble);
    console.log(posX);
    console.log(posY);
    console.log(visible);
    if (nextBubble.posX === posX &&
        nextBubble.posY === posY &&
        nextBubble.visible === visible) {
      return false;
    }
    this.setState({
      posX: nextBubble.posX,
      posY: nextBubble.posY,
      visible: nextBubble.visible,
    });
    return true;
  }

  updateBubble(posX, posY) {
    const { index } = this.props;
    console.log('## enter updateBubble');
    console.log(index);
    console.log(posX);
    console.log(posY);
    this.props.updateBubble(index, posX, posY, true);
  }

  render() {
    const { posX, posY, visible } = this.props.bubbleData[this.props.index];
    const { mode } = this.props;
    const dispY = mode === MEASURING_MODE && visible ? step : 0;
    this.preInfo = {
      posX,
      posY,
      visible,
    };
    console.log('## enter Bubble render');
    console.log(this.props.index);
    console.log(posX);
    console.log(posY);
    console.log(visible);
      if (!visible) {
        return null;
      }
    return (
      <Spring from={{rate: 0}}
              to={{rate: 1}}
              reset={true}
              onRest={() => {
                this.updateBubble(posX, posY + dispY);
              }}
      >
        {props => (
              <animated.div className={style.bubbleWrapper} style={{ right: posX, bottom: posY + props.rate * dispY }}>
                <div className={style.bubble}/>
              </animated.div>)}
      </Spring>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    bubbleData: state.bubbles.bubbleData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBubble: (index, posX, posY, visible) => dispatch(updateBubble(index, posX, posY, visible)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bubble);
