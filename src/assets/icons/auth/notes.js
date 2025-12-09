import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Notes(props) {
  return (
    <Svg width="20" height="55" viewBox="0 0 20 20" fill="none">
      <Path
        d="M18.3346 8.33366V12.5003C18.3346 16.667 16.668 18.3337 12.5013 18.3337H7.5013C3.33464 18.3337 1.66797 16.667 1.66797 12.5003V7.50033C1.66797 3.33366 3.33464 1.66699 7.5013 1.66699H11.668"
        stroke="#647683"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3346 8.33366H15.0013C12.5013 8.33366 11.668 7.50033 11.668 5.00033V1.66699L18.3346 8.33366Z"
        stroke="#647683"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.83203 10.833H10.832"
        stroke="#647683"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.83203 14.167H9.16536"
        stroke="#647683"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
