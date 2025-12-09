import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function DarkTheme(props) {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M1.86083 11.3852C2.19083 16.106 6.19667 19.9469 10.9908 20.1577C14.3733 20.3044 17.3983 18.7277 19.2133 16.2435C19.965 15.226 19.5617 14.5477 18.3058 14.7769C17.6917 14.8869 17.0592 14.9327 16.3992 14.9052C11.9167 14.7219 8.25 10.9727 8.23167 6.54521C8.2225 5.35354 8.47 4.22604 8.91917 3.19938C9.41417 2.06271 8.81833 1.52188 7.6725 2.00771C4.0425 3.53854 1.55833 7.19604 1.86083 11.3852Z"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
