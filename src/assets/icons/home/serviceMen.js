import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function ServiceMen(props) {
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M15 15.6702H14.3667C13.7 15.6702 13.0667 15.9278 12.6 16.393L11.175 17.7972C10.525 18.4369 9.46668 18.4369 8.81668 17.7972L7.39166 16.393C6.925 15.9278 6.28333 15.6702 5.625 15.6702H5C3.61667 15.6702 2.5 14.5652 2.5 13.2026V4.12973C2.5 2.76714 3.61667 1.66211 5 1.66211H15C16.3833 1.66211 17.5 2.76714 17.5 4.12973V13.1943C17.5 14.5569 16.3833 15.6702 15 15.6702Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.0589 7.43562C10.0255 7.43562 9.97552 7.43562 9.93386 7.43562C9.05886 7.40238 8.36719 6.69616 8.36719 5.81546C8.36719 4.91815 9.0922 4.19531 9.9922 4.19531C10.8922 4.19531 11.6172 4.92646 11.6172 5.81546C11.6255 6.69616 10.9339 7.41069 10.0589 7.43562Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        strokeMiterlimit="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.71016 9.93564C6.60182 10.6751 6.60182 11.8798 7.71016 12.6193C8.96849 13.4584 11.0352 13.4584 12.2935 12.6193C13.4018 11.8798 13.4018 10.6751 12.2935 9.93564C11.0352 9.10479 8.97682 9.10479 7.71016 9.93564Z"
        stroke={props.color ? props.color : '#647683'}
        strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
        strokeMiterlimit="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
