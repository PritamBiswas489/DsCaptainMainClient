import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function Tags(props) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M15.75 7.5L10.5 2.25C10.3358 2.08579 10.1324 2 9.92188 2H3.75C3.33579 2 3 2.33579 3 2.75V8.92188C3 9.13242 3.08579 9.33578 3.25 9.5L8.5 14.75C8.76522 15.0152 9.23478 15.0152 9.5 14.75L15.75 8.5C16.0152 8.23478 16.0152 7.76522 15.75 7.5Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.375 6.375C7.05964 6.375 7.625 5.80964 7.625 5.125C7.625 4.44036 7.05964 3.875 6.375 3.875C5.69036 3.875 5.125 4.44036 5.125 5.125C5.125 5.80964 5.69036 6.375 6.375 6.375Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
