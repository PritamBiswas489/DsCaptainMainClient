import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Clock(props) {
  return (
    <Svg
      width={props.width ? props.width : '18'}
      height={props.height ? props.height : '18'}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M14.6673 8.00065C14.6673 11.6807 11.6807 14.6673 8.00065 14.6673C4.32065 14.6673 1.33398 11.6807 1.33398 8.00065C1.33398 4.32065 4.32065 1.33398 8.00065 1.33398C11.6807 1.33398 14.6673 4.32065 14.6673 8.00065Z"
        stroke={props.color ? props.color : '#0CBC8B'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.4739 10.1192L8.40724 8.88586C8.04724 8.67253 7.75391 8.15919 7.75391 7.73919V5.00586"
        stroke={props.color ? props.color : '#0CBC8B'}
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
