import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const CheckList = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}>
    <Path
      stroke={props.color ? props.color : '#171B27'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M9.305 15.208h6.945M9.305 10.347h6.945M9.305 5.486h6.945M3.75 5.486l.694.695 2.084-2.084M3.75 10.347l.694.694 2.084-2.083M3.75 15.208l.694.695 2.084-2.084"
    />
  </Svg>
);
