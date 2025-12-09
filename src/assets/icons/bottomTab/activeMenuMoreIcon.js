import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function ActiveMenuIcon(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 7H21"
        stroke="#FE782E" // Active color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12H21"
        stroke="#FE782E" // Active color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 17H21"
        stroke="#FE782E" // Active color
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
