import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function BookingFilterIcon(props) {
  return (
    <Svg width="18" height="18" viewBox="0 0 20 21" fill="none">
      <Path
        d="M18.3359 5.50049H13.3359"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.9974 5.50049H1.66406"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.33073 8.42087C9.94156 8.42087 11.2474 7.11337 11.2474 5.50048C11.2474 3.88759 9.94156 2.58008 8.33073 2.58008C6.7199 2.58008 5.41406 3.88759 5.41406 5.50048C5.41406 7.11337 6.7199 8.42087 8.33073 8.42087Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3333 14.6787H15"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.66406 14.6782H1.66406"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.6667 17.5991C13.2775 17.5991 14.5833 16.2916 14.5833 14.6787C14.5833 13.0658 13.2775 11.7583 11.6667 11.7583C10.0558 11.7583 8.75 13.0658 8.75 14.6787C8.75 16.2916 10.0558 17.5991 11.6667 17.5991Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
