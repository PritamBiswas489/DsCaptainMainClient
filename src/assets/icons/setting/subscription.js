import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Subscription(props) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M12.5254 14.235H5.47539C5.16039 14.235 4.80789 13.9875 4.70289 13.6875L1.59789 5.00252C1.15539 3.75752 1.67289 3.37502 2.73789 4.14002L5.66289 6.23252C6.15039 6.57002 6.70539 6.39752 6.91539 5.85002L8.23539 2.33252C8.65539 1.20752 9.35289 1.20752 9.77289 2.33252L11.0929 5.85002C11.3029 6.39752 11.8579 6.57002 12.3379 6.23252L15.0829 4.27502C16.2529 3.43502 16.8154 3.86252 16.3354 5.22002L13.3054 13.7025C13.1929 13.9875 12.8404 14.235 12.5254 14.235Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.875 16.5005H13.125"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.125 10.4995H10.875"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
