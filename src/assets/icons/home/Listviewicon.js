import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Listviewicon(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M7 5.99951H16.9995"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <Path
        d="M3 5.99951H4"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <Path
        d="M7 9.99951H17.001"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <Path
        d="M3 9.99951H4"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <Path
        d="M7 13.9995H17.0001"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <Path
        d="M3 13.9995H4"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
