import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Search(props) {
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M9.58268 17.5003C13.9549 17.5003 17.4993 13.9559 17.4993 9.58366C17.4993 5.2114 13.9549 1.66699 9.58268 1.66699C5.21043 1.66699 1.66602 5.2114 1.66602 9.58366C1.66602 13.9559 5.21043 17.5003 9.58268 17.5003Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3327 18.3337L16.666 16.667"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
