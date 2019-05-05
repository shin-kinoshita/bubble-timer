import React from 'react';
import { connect } from 'react-redux';
import { Spring, animated } from 'react-spring/renderprops'

import Whale from '../components/Whale';
import style from './WhaleSegment.css';
import { startTimer, stopTimer, updateBubble } from '../../actions';
import { MEASURING_MODE, STOP_MODE } from '../../reducers/mode';

const step = 10;
const maxX = 390;
const minX = 220;
class WhaleSegment extends React.Component {
  constructor(props) {
    super(props);
    this.onPressStart = this.onPressStart.bind(this);
    this.onPressStop = this.onPressStop.bind(this);
    this.state = {
      posX: 220,
      posY: 30,
      direction: 1,
    }
  }

  onPressStart() {
    const { visibleBubbleCount } = this.props;
    this.props.onPressStart(visibleBubbleCount);
  }

  onPressStop() {
    this.props.onPressStop();
  }

  updateDest(posX, posY) {
    const { direction } = this.state;
    if ((maxX - posX) * direction > 0 || (minX - posX) * direction > 0) {
      this.setState({
        posX,
        posY,
        direction,
      });
    } else {
      this.setState({
        posX,
        posY,
        direction: -1 * direction,
      });
    }
  }

  render() {
    const { mode } = this.props;
    const { direction, posX, posY } = this.state;
    const dispX = mode === MEASURING_MODE ? step * direction : 0;
    return (
      <Spring from={{rate: 0}}
              to={{rate: 1}}
              reset={true}
              onRest={() => this.updateDest(posX + dispX, posY)}
      >
        {props => (
          <animated.div className={style.whale}
                        style={{right: posX + props.rate * dispX, bottom: posY}}>
            <Whale direction={direction} onPress={mode === STOP_MODE ? this.onPressStart : this.onPressStop}/>
          </animated.div>
        )}
      </Spring>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    visibleBubbleCount: state.bubbles.visibleCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPressStart: (index) => {
      dispatch(startTimer());
      dispatch(updateBubble(index, 180, 80, true));
    },
    onPressStop: () => {
      dispatch(stopTimer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhaleSegment);
