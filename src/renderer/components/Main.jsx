import React from 'react';
import ButtonSegment from './ButtonSegment';
import TimeSegment from './TimeSegment';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Hurry up!!!</p>
        <TimeSegment/>
        <ButtonSegment/>
      </div>
    );
  }
}
