import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Mail(props) {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <Path
        d="M10.625 12.8125H4.375C2.5 12.8125 1.25 11.875 1.25 9.6875V5.3125C1.25 3.125 2.5 2.1875 4.375 2.1875H10.625C12.5 2.1875 13.75 3.125 13.75 5.3125V9.6875C13.75 11.875 12.5 12.8125 10.625 12.8125Z"
        stroke="#171B27"
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.625 5.625L8.66875 7.1875C8.025 7.7 6.96875 7.7 6.325 7.1875L4.375 5.625"
        stroke="#171B27"
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
