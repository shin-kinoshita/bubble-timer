import React from 'react';
import { connect } from 'react-redux';

import style from './TimeText.css';
import { MEASURING_MODE } from '../../reducers/mode';
import { updateTime } from '../../actions';

class TimeText extends React.Component {
  constructor(props) {
    super(props);
    this.onMinutesChange = this.onMinutesChange.bind(this);
    this.onSecondsChange = this.onSecondsChange.bind(this);
  }

  onMinutesChange(e) {
    const minutes = e.target.value;
    const { seconds } = this.props;
    this.onTimeChange(minutes, seconds);
  };

  onSecondsChange(e) {
    const { minutes } = this.props;
    const seconds = e.target.value;
    this.onTimeChange(minutes, seconds);
  };

  onTimeChange(minutes, seconds) {
    if (Number(minutes) === undefined || Number(seconds) === undefined) {
      return;
    }
    if (minutes.length > 2 || seconds.length > 2) {
      return;
    }
    this.props.onTimeChange(parseInt(minutes), parseInt(seconds));
  }

  render() {
    const { mode, minutes, seconds } = this.props;
    const minutesStr = minutes ? minutes.toString().padStart(2, '0') : '00';
    const secondsStr = seconds ? seconds.toString().padStart(2, '0') : '00';
    return (
      <div>
        <input type="text"
               className={style.textbox}
               value={minutesStr}
               disabled={mode === MEASURING_MODE}
               onChange={this.onMinutesChange}
        />
        <span className={style.separator}>:</span>
        <input type="text"
               className={style.textbox}
               value={secondsStr}
               disabled={mode === MEASURING_MODE}
               onChange={this.onSecondsChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    minutes: state.remainedTime.minutes,
    seconds: state.remainedTime.seconds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTimeChange: (minutes, seconds) => {
      dispatch(updateTime(minutes, seconds));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeText);
