import React from 'react';

import ButtonSegment from '../containers/ButtonSegment';
import TimeSegment from '../containers/TimeSegment';
import style from './Main.css';
import WhaleSegment from '../containers/WhaleSegment';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hurry up!!!</p>
        <WhaleSegment/>
        <div className={style.timeSegment}>
          <TimeSegment/>
        </div>
        {/*<ButtonSegment/>*/}
      </div>
    );
  }
}
