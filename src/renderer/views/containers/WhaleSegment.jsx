import React from 'react';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops'

import Whale from '../components/Whale';
import style from './WhaleSegment.css';
import { startTimer, stopTimer } from '../../actions';
import { STOP_MODE } from '../../reducers/mode';

const step = 10;
class WhaleSegment extends React.Component {
  constructor(props) {
    super(props);
    this.onPressStart = this.onPressStart.bind(this);
    this.onPressStop = this.onPressStop.bind(this);
    this.state = {
      positionX: 30,
      positionY: 40,
      direction: 1,
    }
  }

  onPressStart() {
    this.props.onPressStart();
  }

  onPressStop() {
    this.props.onPressStop();
  }

  render() {
    const { mode } = this.props;
    const { direction, positionX, positionY } = this.state;
    return (
      <Spring from={{rate: 0}}
              to={{rate: 1}}
              reset={true}
              onRest={() => {
                this.setState({
                  positionX: this.state.positionX,
                  positionY: this.state.positionY + step,
                });
              }}
      >
        {props => (
          <div className={style.whale} style={{bottom: positionX + 0 * direction, right: positionY + props.rate * step * direction}}>
            <Whale onPress={mode === STOP_MODE ? this.onPressStart : this.onPressStop}/>
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
