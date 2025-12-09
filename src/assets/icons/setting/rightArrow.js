import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function RightArrow(props) {
  return (
    <Svg
      width={props.width ? props.width : '16'}
      height={props.height ? props.height : '16'}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M5.94141 13.2807L10.2881 8.93404C10.8014 8.4207 10.8014 7.5807 10.2881 7.06737L5.94141 2.7207"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
