import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Alert(props) {
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        d="M10.0013 18.3332C14.5846 18.3332 18.3346 14.5832 18.3346 9.99984C18.3346 5.4165 14.5846 1.6665 10.0013 1.6665C5.41797 1.6665 1.66797 5.4165 1.66797 9.99984C1.66797 14.5832 5.41797 18.3332 10.0013 18.3332Z"
        stroke={props.color ? props.color : '#0CBC8B'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 14.1665L10 9.99984"
        stroke={props.color ? props.color : '#0CBC8B'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0039 7.5L9.99642 7.5"
        stroke={props.color ? props.color : '#0CBC8B'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
