import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Company(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.4156 18.333H3.39896C2.43229 18.333 1.64062 17.558 1.64062 16.608V4.24131C1.64062 2.05797 3.26563 1.06631 5.25729 2.04131L8.95729 3.85797C9.75729 4.24964 10.4156 5.29131 10.4156 6.17464V18.333Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3096 12.5503V15.7003C18.3096 17.5003 17.4763 18.3336 15.6763 18.3336H10.418V8.68359L10.8096 8.76693L14.5596 9.60859L16.2513 9.98359C17.3513 10.2253 18.2513 10.7919 18.3013 12.3919C18.3096 12.4419 18.3096 12.4919 18.3096 12.5503Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.58203 7.5H7.4737"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.58203 10.833H7.4737"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.5586 9.60827V12.2916C14.5586 13.3249 13.7169 14.1666 12.6836 14.1666C11.6503 14.1666 10.8086 13.3249 10.8086 12.2916V8.7666L14.5586 9.60827Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3003 12.3917C18.2503 13.3751 17.4336 14.1667 16.4336 14.1667C15.4003 14.1667 14.5586 13.3251 14.5586 12.2917V9.6084L16.2503 9.9834C17.3503 10.2251 18.2503 10.7917 18.3003 12.3917Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
