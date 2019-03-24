import React from 'react';

import ButtonSegment from '../containers/ButtonSegment';
import TimeSegment from '../containers/TimeSegment';
import style from './Main.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hurry up!!!</p>
        <div className={style.timeSegment}>
          <TimeSegment/>
        </div>
        <ButtonSegment/>
      </div>
    );
  }
}
