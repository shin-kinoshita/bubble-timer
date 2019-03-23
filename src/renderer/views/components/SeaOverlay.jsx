import React from 'react';
import style from './SeaOverlay.css';

export default class SeaOverlay extends React.Component {
  render() {
    return (
      <div className={style.seaOverlay}>
        <svg width="500" height="328" viewBox="0 0 500 328">
          <defs>
            <linearGradient id="linear-gradient" x1="1" y1="1" x2="0" y2="0.009" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#284377"/>
              <stop offset="1" stop-color="#6ddff4" stop-opacity="0.702"/>
            </linearGradient>
          </defs>
          <g id="Group_3" data-name="Group 3" transform="translate(-20 -602)">
            <path id="Path_49" data-name="Path 49" d="M0,0H500V328H0Z" transform="translate(20 602)" fill="url(#linear-gradient)"/>
          </g>
        </svg>
      </div>
    );
  }
}
