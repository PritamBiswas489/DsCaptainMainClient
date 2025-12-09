import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function SettingFilter(props) {
  return (
    <Svg
      width={props.width ? props.width : '19'}
      height={props.height ? props.height : '19'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M14.584 18.333L14.584 13.333"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.584 5.00033L14.584 1.66699"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.6667 8.33366C11.6667 9.94449 12.9725 11.2503 14.5833 11.2503C16.1942 11.2503 17.5 9.94449 17.5 8.33366C17.5 6.72283 16.1942 5.41699 14.5833 5.41699C12.9725 5.41699 11.6667 6.72283 11.6667 8.33366Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.41602 18.3333L5.41602 15"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.41602 6.66699L5.41602 1.66699"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.50065 11.6667C2.50065 13.2775 3.80649 14.5833 5.41732 14.5833C7.02815 14.5833 8.33398 13.2775 8.33398 11.6667C8.33398 10.0558 7.02815 8.75 5.41732 8.75C3.80649 8.75 2.50065 10.0558 2.50065 11.6667Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
