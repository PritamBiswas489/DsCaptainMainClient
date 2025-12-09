import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Identity(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.18203 16.25H6.2487C5.73203 16.25 5.2737 16.2333 4.86536 16.175C2.6737 15.9333 2.08203 14.9 2.08203 12.0833V7.91667C2.08203 5.1 2.6737 4.06667 4.86536 3.825C5.2737 3.76667 5.73203 3.75 6.2487 3.75H9.13203"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5156 3.75H13.749C14.2656 3.75 14.724 3.76667 15.1323 3.825C17.324 4.06667 17.9156 5.1 17.9156 7.91667V12.0833C17.9156 14.9 17.324 15.9333 15.1323 16.175C14.724 16.2333 14.2656 16.25 13.749 16.25H12.5156"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5 1.66699V18.3337"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.66797 7.08301V12.9163"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
