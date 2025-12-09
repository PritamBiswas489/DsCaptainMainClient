import React from 'react';
import Svg, {Path} from 'react-native-svg';
import appColors from '@theme/appColors';
import {useValues} from '../../../../App';

export function MoreArrow() {
  const {isDark} = useValues();
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24">
      <Path
        fill={isDark ? appColors.white : appColors.darkText}
        d="m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307z"></Path>
    </Svg>
  );
}
