

import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function DoubleArrow(props) {
  return (
    <Svg width="13" height="14" viewBox="0 0 13 14" fill="none">
    <Path d="M7 13L11.5932 8.06061C12.1356 7.47727 12.1356 6.52273 11.5932 5.93939L7 1" stroke="white" strokeWidth="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <Path opacity="0.5" d="M1 13L5.59317 8.47222C6.13561 7.9375 6.13561 7.0625 5.59317 6.52778L1 2" stroke="white" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}

