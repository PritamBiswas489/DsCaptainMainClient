import React from 'react';
import Svg, {Path, G, ClipPath, Defs, Rect} from 'react-native-svg';

export function Verify(props) {
  return (
    <Svg width="25" height="16" viewBox="0 0 14 14" fill="none">
      <G clip-path="url(#clip0_863_1417)">
        <Path
          d="M13.4193 7.0001L11.9959 5.37844L12.1943 3.23177L10.0884 2.75344L8.98594 0.898438L7.0026 1.7501L5.01927 0.898438L3.91677 2.75344L1.81094 3.22594L2.00927 5.3726L0.585938 7.0001L2.00927 8.62177L1.81094 10.7743L3.91677 11.2526L5.01927 13.1076L7.0026 12.2501L8.98594 13.1018L10.0884 11.2468L12.1943 10.7684L11.9959 8.62177L13.4193 7.0001ZM5.83594 9.91677L3.5026 7.58344L4.3251 6.76094L5.83594 8.26594L9.6801 4.42177L10.5026 5.2501L5.83594 9.91677Z"
          fill="#0CBC8B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_863_1417">
          <Rect width="14" height="14" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
