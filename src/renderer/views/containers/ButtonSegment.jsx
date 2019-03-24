import React from 'react';
import { connect } from 'react-redux';

import { resetTimer, startTimer, stopTimer } from '../../actions';
import { STOP_MODE } from '../../reducers/mode';

class ButtonSegment extends React.Component {
  constructor(props) {
    super(props);
    this.onPressStart = this.onPressStart.bind(this);
    this.onPressStop = this.onPressStop.bind(this);
    this.onPressReset = this.onPressReset.bind(this);
  }

  onPressStart() {
    this.props.onPressStart();
  }

  onPressStop() {
    this.props.onPressStop();
  }

  onPressReset() {
    this.props.onPressReset();
  }

  render() {
    const { mode } = this.props;
    return (
      <div>
        <button type="button"
                onClick={mode === STOP_MODE ? this.onPressStart : this.onPressStop}
        >{mode === STOP_MODE ? 'Start' : 'Stop'}</button>
        <button type="button" onClick={this.onPressReset}>Reset</button>
      </div>
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
    onPressReset: () => {
      dispatch(resetTimer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSegment);
