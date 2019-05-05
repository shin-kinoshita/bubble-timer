import React from 'react';
import { connect } from 'react-redux';
import { Spring, animated } from 'react-spring/renderprops'

import Bubble from '../components/Bubble';
import style from './BubbleSegment.css';
import { MEASURING_MODE } from '../../reducers/mode';
import { updateBubble } from '../../actions';


export default class BubbleSegment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {[...Array(5).keys()].map(index => <Bubble index={index}/>)}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     mode: state.mode,
//     bubbles: state.bubbles,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateBubble: (index, posX, posY) => dispatch(updateBubble(index, posX, posY)),
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(BubbleSegment);
