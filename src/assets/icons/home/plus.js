import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Plus(props) {
  return (
    <Svg
      width={props.width ? props.width : '19'}
      height={props.height ? props.height : '19'}
      viewBox="0 0 20 21"
      fill="none">
      <Path
        d="M5 10.9082H15"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={'1.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 15.8853V5.92969"
        stroke={props.color ? props.color : 'white'}
        strokeWidth={'1.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
