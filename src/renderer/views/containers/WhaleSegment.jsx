import React from 'react';
import { connect } from 'react-redux';

import Whale from '../components/Whale';
import { startTimer, stopTimer } from '../../actions';
import { STOP_MODE } from '../../reducers/mode';

class WhaleSegment extends React.Component {
  constructor(props) {
    super(props);
    this.onPressStart = this.onPressStart.bind(this);
    this.onPressStop = this.onPressStop.bind(this);
  }

  onPressStart() {
    this.props.onPressStart();
  }

  onPressStop() {
    this.props.onPressStop();
  }

  render() {
    const { mode } = this.props;
    return (
      <Whale onPress={mode === STOP_MODE ? this.onPressStart : this.onPressStop}/>
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
