import React from 'react';
import { connect } from 'react-redux';

import { startTimer, stopTimer } from '../../actions';

class ButtonSegment extends React.Component {
  onPressStart() {
    this.props.onPressStart();
  }

  onPressStop() {
    this.props.onPressStop();
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onPressStart.bind(this)}>Start</button>
        <button type="button" onClick={this.onPressStop.bind(this)}>Stop</button>
      </div>
    );
  }
}

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

export default connect(undefined, mapDispatchToProps)(ButtonSegment);
