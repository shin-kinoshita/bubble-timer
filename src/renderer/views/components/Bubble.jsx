import React from 'react';

import style from './Bubble.css';

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.bubble} />
    );
  }
}
