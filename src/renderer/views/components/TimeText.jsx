import React from 'react';
import { connect } from 'react-redux';

import style from './TimeText.css';

class TimeText extends React.Component {
  render() {
    const { minutes, seconds } = this.props;
    const minutesStr = minutes ? minutes.toString().padStart(2, '0') : '00';
    const secondsStr = seconds ? seconds.toString().padStart(2, '0') : '00';
    return (
      <span className={style.container}>
        {minutesStr}:{secondsStr}
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    minutes: state.remainedTime.minutes,
    seconds: state.remainedTime.seconds,
  };
};

export default connect(mapStateToProps)(TimeText);
