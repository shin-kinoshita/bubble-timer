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
    return (
      <div className={style.whale}
         onClick={this.onPress}
      />
    );
  }
}
