import React from 'react';
import Svg, {Path} from 'react-native-svg';
import appColors from '../../../theme/appColors';

export function Password(props) {
  return (
    <Svg width="22" height="22" viewBox="0 0 20 20" fill="none">
      <Path
        d="M5 8.33366V6.66699C5 3.90866 5.83333 1.66699 10 1.66699C14.1667 1.66699 15 3.90866 15 6.66699V8.33366"
        stroke={props.color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.99984 15.4167C11.1504 15.4167 12.0832 14.4839 12.0832 13.3333C12.0832 12.1827 11.1504 11.25 9.99984 11.25C8.84924 11.25 7.9165 12.1827 7.9165 13.3333C7.9165 14.4839 8.84924 15.4167 9.99984 15.4167Z"
        stroke={props.color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.1665 18.333H5.83317C2.49984 18.333 1.6665 17.4997 1.6665 14.1663V12.4997C1.6665 9.16634 2.49984 8.33301 5.83317 8.33301H14.1665C17.4998 8.33301 18.3332 9.16634 18.3332 12.4997V14.1663C18.3332 17.4997 17.4998 18.333 14.1665 18.333Z"
        stroke={props.color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
