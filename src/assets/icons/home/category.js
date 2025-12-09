import React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

export function Category(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1140_8490)">
        <Path
          d="M2 8.52V3.98C2 2.57 2.64 2 4.23 2H8.27C9.86 2 10.5 2.57 10.5 3.98V8.51C10.5 9.93 9.86 10.49 8.27 10.49H4.23C2.64 10.5 2 9.93 2 8.52Z"
          stroke={props.color ? props.color : '#647683'}
          strokeWidth="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M2 19.77V15.73C2 14.14 2.64 13.5 4.23 13.5H8.27C9.86 13.5 10.5 14.14 10.5 15.73V19.77C10.5 21.36 9.86 22 8.27 22H4.23C2.64 22 2 21.36 2 19.77Z"
          stroke={props.color ? props.color : '#647683'}
          strokeWidth="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.5 8.52V3.98C13.5 2.57 14.14 2 15.73 2H19.77C21.36 2 22 2.57 22 3.98V8.51C22 9.93 21.36 10.49 19.77 10.49H15.73C14.14 10.5 13.5 9.93 13.5 8.52Z"
          stroke={props.color ? props.color : '#647683'}
          strokeWidth="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M13.5 19.77V15.73C13.5 14.14 14.14 13.5 15.73 13.5H19.77C21.36 13.5 22 14.14 22 15.73V19.77C22 21.36 21.36 22 19.77 22H15.73C14.14 22 13.5 21.36 13.5 19.77Z"
          stroke={props.color ? props.color : '#647683'}
          strokeWidth="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1140_8490">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 1 24 0)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
