import React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export function ImageIcon(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Outer frame */}
      <Rect 
        x="2" 
        y="3" 
        width="20" 
        height="18" 
        rx="2" 
        ry="2" 
        stroke="#647683" 
        strokeWidth="1.4" 
      />
      
      {/* Sun or circle (top left) */}
      <Circle 
        cx="8" 
        cy="8" 
        r="2" 
        stroke="#647683" 
        strokeWidth="1.4" 
      />
      
      {/* Mountain */}
      <Path 
        d="M4 17L10 11L14 15L18 10L22 17" 
        stroke="#647683" 
        strokeWidth="1.4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </Svg>
  );
}
