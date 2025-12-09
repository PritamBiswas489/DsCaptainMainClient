import React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

export function Edit(props) {
  return (
    <Svg
      width={props.width ? props.width : '20'}
      height={props.height ? props.height : '20'}
      viewBox="0 0 20 20"
      fill="none">
      <G clip-path="url(#clip0_1188_7422)">
        <Path
          d="M11.0514 3.00002L4.20976 10.2417C3.95142 10.5167 3.70142 11.0584 3.65142 11.4334L3.34309 14.1333C3.23476 15.1083 3.93476 15.775 4.90142 15.6084L7.58476 15.15C7.95976 15.0834 8.48476 14.8084 8.74309 14.525L15.5848 7.28335C16.7681 6.03335 17.3014 4.60835 15.4598 2.86668C13.6264 1.14168 12.2348 1.75002 11.0514 3.00002Z"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.91016 4.20801C10.2685 6.50801 12.1352 8.26634 14.4518 8.49967"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.5 18.333H17.5"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth={props.strokeWidth ? props.strokeWidth : '1.2'}
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1188_7422">
          <Rect
            width={props.width ? props.width : '20'}
            height="20"
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
