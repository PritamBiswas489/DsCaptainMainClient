import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

export function Cross(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width ? props.width : '24'}
      height={props.height ? props.height : '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M6 18L18 6"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#171B27'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.7'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 18L6 6"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#171B27'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.7'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
