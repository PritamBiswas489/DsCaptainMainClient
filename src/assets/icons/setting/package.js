import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Package(props) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M14.9766 7.5H2.97656V13.5C2.97656 15.75 3.72656 16.5 5.97656 16.5H11.9766C14.2266 16.5 14.9766 15.75 14.9766 13.5V7.5Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.125 5.25V6C16.125 6.825 15.7275 7.5 14.625 7.5H3.375C2.2275 7.5 1.875 6.825 1.875 6V5.25C1.875 4.425 2.2275 3.75 3.375 3.75H14.625C15.7275 3.75 16.125 4.425 16.125 5.25Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.73008 3.75008H4.59008C4.33508 3.47258 4.34258 3.04508 4.61258 2.77508L5.67758 1.71008C5.95508 1.43258 6.41258 1.43258 6.69008 1.71008L8.73008 3.75008Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4017 3.75008H9.26172L11.3017 1.71008C11.5792 1.43258 12.0367 1.43258 12.3142 1.71008L13.3792 2.77508C13.6492 3.04508 13.6567 3.47258 13.4017 3.75008Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.70508 7.5V11.355C6.70508 11.955 7.36508 12.3075 7.86758 11.985L8.57258 11.52C8.82758 11.355 9.15008 11.355 9.39758 11.52L10.0651 11.97C10.5601 12.3 11.2276 11.9475 11.2276 11.3475V7.5H6.70508Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
