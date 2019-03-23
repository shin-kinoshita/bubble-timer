import React from 'react';
import ButtonSegment from '../containers/ButtonSegment';
import TimeSegment from '../containers/TimeSegment';
import SeaOverlay from './SeaOverlay';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hurry up!!!</p>
        <SeaOverlay/>
        <TimeSegment/>
        <ButtonSegment/>
      </div>
    );
  }
}
