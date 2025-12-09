import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Booked(props) {
  return (
    <Svg
      width={props.width ? props.width : '18'}
      height={props.height ? props.height : '18'}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M4.48732 13.1335C5.03398 12.5468 5.86732 12.5935 6.34732 13.2335L7.02065 14.1335C7.56065 14.8468 8.43398 14.8468 8.97398 14.1335L9.64732 13.2335C10.1273 12.5935 10.9607 12.5468 11.5073 13.1335C12.694 14.4002 13.6607 13.9802 13.6607 12.2068V4.6935C13.6673 2.00683 13.0407 1.3335 10.5207 1.3335H5.48065C2.96065 1.3335 2.33398 2.00683 2.33398 4.6935V12.2002C2.33398 13.9802 3.30732 14.3935 4.48732 13.1335Z"
        stroke="#647683"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.33398 4.6665H10.6673"
        stroke="#647683"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 7.3335H10"
        stroke="#647683"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
