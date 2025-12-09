import React from 'react';
import Svg, {Path,Text} from 'react-native-svg';

export function Amount(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      
      <Text x="8" y="14" fill="#647683" font-size="10" font-family="Arial">₹</Text>
      <Path
        d="M10.0013 18.3337C14.6037 18.3337 18.3346 14.6027 18.3346 10.0003C18.3346 5.39795 14.6037 1.66699 10.0013 1.66699C5.39893 1.66699 1.66797 5.39795 1.66797 10.0003C1.66797 14.6027 5.39893 18.3337 10.0013 18.3337Z"
        stroke="#647683"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
