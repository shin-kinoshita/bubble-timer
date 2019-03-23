import React from 'react';
import { connect } from 'react-redux';

import { resetTimer, startTimer, stopTimer } from '../../actions';
import { STOP_MODE } from '../../reducers';

class ButtonSegment extends React.Component {
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
                onClick={mode === STOP_MODE ? this.onPressStart.bind(this) : this.onPressStop.bind(this)}
        >{mode === STOP_MODE ? 'Start' : 'Stop'}</button>
        <button type="button" onClick={this.onPressReset.bind(this)}>Reset</button>
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
