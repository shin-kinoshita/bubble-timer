import React from 'react';

import style from './Whale.css';

export default class Whale extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress();
  }

  render() {
    const { direction } = this.props;
    return (
      <div className={style.whale}
           style={{transform: `scale(${direction > 0 ? 1 : -1}, 1)`}}
           onClick={this.onPress}
      />
    );
  }
}
