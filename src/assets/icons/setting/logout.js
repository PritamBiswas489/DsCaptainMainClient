import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Logout(props) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M4.87508 11.0098L2.95508 9.08977L4.87508 7.16977"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.6353 9.08984L3.00781 9.08984"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 15C12.315 15 15 12.75 15 9C15 5.25 12.315 3 9 3"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
