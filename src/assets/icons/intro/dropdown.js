import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Dropdown(props) {
  return (
    <Svg
      width={props.width ? props.width : '18'}
      height={props.height ? props.height : '18'}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M13.2802 5.94043L8.93355 10.2871C8.42021 10.8004 7.58022 10.8004 7.06688 10.2871L2.72021 5.94043"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.4'}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
