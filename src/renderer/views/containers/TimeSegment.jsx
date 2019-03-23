import React from 'react';
import { connect } from 'react-redux';

class TimeSegment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mode, remainedTime } = this.props;
    return (
      <div>
        <p>current mode: { mode }</p>
        <p>remained time: { remainedTime }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    remainedTime: state.remainedTime,
  };
};

export default connect(mapStateToProps)(TimeSegment);
