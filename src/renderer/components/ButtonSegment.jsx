import React from 'react';

export default class ButtonSegment extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressStart() {
    console.log('## enter onPressStart');
  }

  onPressStop() {
    console.log('## enter onPressStop');
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onPressStart}>Start</button>
        <button type="button" onClick={this.onPressStop}>Stop</button>
      </div>
    );
  }
}
