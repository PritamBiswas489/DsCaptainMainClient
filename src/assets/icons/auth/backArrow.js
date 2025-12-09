import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

export function BackArrow(props) {
  const {isDark} = useValues();
  return (
    <Svg
      width={props.width || '25'}
      height={props.height || '25'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M7.97533 4.94141L2.91699 9.99974L7.97533 15.0581"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#171B27'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.0836 10H3.05859"
        stroke={
          props.color ? props.color : isDark ? appColors.white : '#171B27'
        }
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.5'}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
