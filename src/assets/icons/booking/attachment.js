import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Attachment(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.44 11.05L12.94 19.55C11.35 21.14 8.74 21.14 7.15 19.55C5.56 17.96 5.56 15.35 7.15 13.76L15.65 5.26C16.74 4.17 18.49 4.17 19.58 5.26C20.67 6.35 20.67 8.1 19.58 9.19L11.08 17.69C10.54 18.23 9.65 18.23 9.11 17.69C8.57 17.15 8.57 16.26 9.11 15.72L16.61 8.22"
        stroke="#647683"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
