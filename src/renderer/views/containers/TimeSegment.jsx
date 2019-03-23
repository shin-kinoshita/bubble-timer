import React from 'react';
import { connect } from 'react-redux';

class TimeSegment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mode } = this.props;
    return (
      <div>
        <p>current mode is { mode }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(TimeSegment);
