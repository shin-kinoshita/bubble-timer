import React from 'react';
import { connect } from 'react-redux';

import style from './TimeText.css';

class TimeText extends React.Component {
  render() {
    const { minutes, seconds } = this.props;
    const minutesStr = minutes ? minutes.toString().padStart(2, '0') : '00';
    const secondsStr = seconds ? seconds.toString().padStart(2, '0') : '00';
    return (
      <div>
        <input className={style.textbox} type="text" value={minutesStr}/>
        <span className={style.separator}>:</span>
        <input className={style.textbox} type="text" value={secondsStr}/>
      </div>
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
