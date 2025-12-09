import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Timer(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.6982 1.6665H7.29824C4.16491 1.6665 3.92324 4.48317 5.61491 6.0165L14.3816 13.9832C16.0732 15.5165 15.8316 18.3332 12.6982 18.3332H7.29824C4.16491 18.3332 3.92324 15.5165 5.61491 13.9832L14.3816 6.0165C16.0732 4.48317 15.8316 1.6665 12.6982 1.6665Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth={'1.3'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
