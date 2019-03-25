import React from 'react';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops'

import Whale from '../components/Whale';
import style from './WhaleSegment.css';
import { startTimer, stopTimer } from '../../actions';
import { MEASURING_MODE, STOP_MODE } from '../../reducers/mode';

const step = 10;
const maxY = 390;
const minY = 220;
class WhaleSegment extends React.Component {
  constructor(props) {
    super(props);
    this.onPressStart = this.onPressStart.bind(this);
    this.onPressStop = this.onPressStop.bind(this);
    this.state = {
      posX: 30,
      posY: 220,
      direction: 1,
    }
  }

  onPressStart() {
    this.props.onPressStart();
  }

  onPressStop() {
    this.props.onPressStop();
  }

  updateDest(posX, posY) {
    const { direction } = this.state;
    if ((maxY - posY) * direction > 0 || (minY - posY) * direction > 0) {
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
    const dispY = mode === MEASURING_MODE ? step * direction : 0;
    return (
      <Spring from={{rate: 0}}
              to={{rate: 1}}
              reset={true}
              onRest={() => this.updateDest(posX, posY + dispY)}
      >
        {props => (
          <div className={style.whale} style={{bottom: posX + 0 * direction, right: posY + props.rate * dispY}}>
            <Whale direction={direction} onPress={mode === STOP_MODE ? this.onPressStart : this.onPressStop}/>
          </div>
        )}
      </Spring>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPressStart: () => {
      dispatch(startTimer());
    },
    onPressStop: () => {
      dispatch(stopTimer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhaleSegment);
