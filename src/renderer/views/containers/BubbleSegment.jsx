import React from 'react';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops'

import Bubble from '../components/Bubble';
import style from './BubbleSegment.css';

class BubbleSegment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('## enter render of BubbleSegment');
    console.log(this.props);
    const { bubbles } = this.props;
    console.log('## bubble');
    console.log(bubbles);
    return (
      <div>
        {bubbles.map(bubble =>
          <div className={style.bubble} style={{bottom: bubble[1], right: bubble[0]}}>
            <Bubble/>
          </div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bubbles: state.bubbles,
  };
};

export default connect(mapStateToProps)(BubbleSegment);
