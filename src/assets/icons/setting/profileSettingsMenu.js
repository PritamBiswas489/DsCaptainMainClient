import React from 'react';
import Svg, { Path, Circle, Rect , Line} from 'react-native-svg';

export function AccountInformationIcon(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Head */}
      <Circle
        cx="12"
        cy="8"
        r="4"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Body */}
      <Path
        d="M4 20c0-4 4-7 8-7s8 3 8 7"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export function BusinessInformationIcon(props) {
    return (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* Building Outline */}
        <Rect
          x="3"
          y="7"
          width="18"
          height="14"
          rx="2"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Windows */}
        <Path
          d="M8 11h2v2H8zM14 11h2v2h-2zM8 15h2v2H8zM14 15h2v2h-2z"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="1.5"
          fill={props.color ? props.color : '#171B27'}
        />
        {/* Door */}
        <Rect
          x="11"
          y="13"
          width="2"
          height="4"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="1.5"
          fill="none"
        />
      </Svg>
    );
  }

 

export function BusinessSettingsIcon(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Outer Gear */}
      <Path
        d="M12 1.5C11.3384 1.5 10.6892 1.55143 10.0561 1.65011C9.98884 1.66086 9.92163 1.67482 9.85502 1.69197C9.46348 1.79588 9.07964 1.91606 8.70411 2.05156L7.47875 3.28298L5.6967 2.92528L4.67648 4.63528L5.99676 5.95222L5.6967 7.47875L4.63528 8.70411L2.92528 7.47875L2.05156 8.70411C1.91606 9.07964 1.79588 9.46348 1.69197 9.85502C1.67482 9.92163 1.66086 9.98884 1.65011 10.0561C1.55143 10.6892 1.5 11.3384 1.5 12C1.5 12.6616 1.55143 13.3108 1.65011 13.9439C1.66086 14.0112 1.67482 14.0784 1.69197 14.145C1.79588 14.5365 1.91606 14.9204 2.05156 15.2959L3.28298 16.5213L2.92528 18.3033L4.63528 19.3235L5.95222 18.0032L7.47875 18.3033L8.70411 19.3647L7.47875 21.0747L8.70411 21.9484C9.07964 22.0839 9.46348 22.2041 9.85502 22.308C9.92163 22.3252 9.98884 22.3391 10.0561 22.3499C10.6892 22.4486 11.3384 22.5 12 22.5C12.6616 22.5 13.3108 22.4486 13.9439 22.3499C14.0112 22.3391 14.0784 22.3252 14.145 22.308C14.5365 22.2041 14.9204 22.0839 15.2959 21.9484L16.5213 20.717L18.3033 21.0747L19.3235 19.3647L18.0032 18.0478L18.3033 16.5213L19.3647 15.2959L21.0747 16.5213L21.9484 15.2959C22.0839 14.9204 22.2041 14.5365 22.308 14.145C22.3252 14.0784 22.3391 14.0112 22.3499 13.9439C22.4486 13.3108 22.5 12.6616 22.5 12C22.5 11.3384 22.4486 10.6892 22.3499 10.0561C22.3391 9.98884 22.3252 9.92163 22.308 9.85502C22.2041 9.46348 22.0839 9.07964 21.9484 8.70411L20.717 7.47875L21.0747 5.6967L19.3647 4.67648L18.0478 5.99676L16.5213 5.6967L15.2959 4.63528L16.5213 2.92528L15.2959 2.05156C14.9204 1.91606 14.5365 1.79588 14.145 1.69197C14.0784 1.67482 14.0112 1.66086 13.9439 1.65011C13.3108 1.55143 12.6616 1.5 12 1.5Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner Circle */}
      <Circle
        cx="12"
        cy="12"
        r="3"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.5"
        fill="none"
      />
    </Svg>
  );
}


export function CommissionIcon(props) {
    return (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* Percentage Slash */}
        <Path
          d="M5 19L19 5"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Circle */}
        <Circle
          cx="7"
          cy="7"
          r="3"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="2"
          fill="none"
        />
        {/* Bottom Circle */}
        <Circle
          cx="17"
          cy="17"
          r="3"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="2"
          fill="none"
        />
      </Svg>
    );
  }
  export function PromotionalCostIcon(props) {
    return (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* Price Tag */}
        <Path
          d="M20 4L14 4C12.8954 4 12 4.89543 12 6L12 20C12 21.1046 12.8954 22 14 22H20C21.1046 22 22 21.1046 22 20V6C22 4.89543 21.1046 4 20 4Z"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dollar Sign */}
        <Path
          d="M16 9C16 8.44772 15.5523 8 15 8H12.5C12.2239 8 12 8.22386 12 8.5C12 8.77614 12.2239 9 12.5 9H15.5C15.7761 9 16 9.22386 16 9.5V12.5C16 12.7761 15.7761 13 15.5 13H13.5C13.2239 13 13 13.2239 13 13.5C13 13.7761 13.2239 14 13.5 14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H12.5"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dollar Sign Vertical Line */}
        <Line
          x1="14"
          y1="7"
          x2="14"
          y2="17"
          stroke={props.color ? props.color : '#171B27'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }


  