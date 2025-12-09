import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Currency(props) {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M17.6925 7.25986V11.9807C17.6925 14.8041 16.0792 16.014 13.6592 16.014H5.60169C5.18919 16.014 4.79502 15.9774 4.42836 15.8949C4.19919 15.8582 3.9792 15.7941 3.77753 15.7207C2.40253 15.2074 1.56836 14.0157 1.56836 11.9807V7.25986C1.56836 4.43653 3.18169 3.22656 5.60169 3.22656H13.6592C15.7125 3.22656 17.1884 4.09739 17.5825 6.08656C17.6467 6.45322 17.6925 6.82903 17.6925 7.25986Z"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.4439 10.0102V14.7311C20.4439 17.5544 18.8305 18.7644 16.4105 18.7644H8.35302C7.67469 18.7644 7.06053 18.6728 6.52886 18.4711C5.43803 18.0678 4.69552 17.2336 4.42969 15.8953C4.79635 15.9778 5.19052 16.0144 5.60302 16.0144H13.6605C16.0805 16.0144 17.6939 14.8044 17.6939 11.9811V7.26022C17.6939 6.82938 17.6572 6.44441 17.5839 6.08691C19.3255 6.45358 20.4439 7.68189 20.4439 10.0102Z"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.62509 12.0446C10.9616 12.0446 12.0451 10.9611 12.0451 9.6246C12.0451 8.28807 10.9616 7.20459 9.62509 7.20459C8.28856 7.20459 7.20508 8.28807 7.20508 9.6246C7.20508 10.9611 8.28856 12.0446 9.62509 12.0446Z"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.38281 7.6084V11.6418"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8711 7.6084V11.6418"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
