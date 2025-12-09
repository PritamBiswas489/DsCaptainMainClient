import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Services(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.93062 2.48028L4.59063 5.44028C3.38063 6.11028 2.39062 7.79028 2.39062 9.17028V14.8203C2.39062 16.2003 3.38063 17.8803 4.59063 18.5503L9.93062 21.5203C11.0706 22.1503 12.9406 22.1503 14.0806 21.5203L19.4206 18.5503C20.6306 17.8803 21.6206 16.2003 21.6206 14.8203V9.17028C21.6206 7.79028 20.6306 6.11028 19.4206 5.44028L14.0806 2.47028C12.9306 1.84028 11.0706 1.84028 9.93062 2.48028Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
