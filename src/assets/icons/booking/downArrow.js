import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function DownArrow(props) {
  return (
    <Svg
      width={props.width ? props.width : '14'}
      height={props.height ? props.height : '14'}
      viewBox="0 0 14 14"
      fill="none">
      <Path
        d="M11.6189 5.19727L7.81557 9.0006C7.36641 9.44977 6.63141 9.44977 6.18224 9.0006L2.37891 5.19727"
        stroke="#171B27"
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
