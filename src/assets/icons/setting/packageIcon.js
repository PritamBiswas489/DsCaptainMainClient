import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function PackageIcon(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M17.4591 12.1243L12.1341 17.4494C10.9674 18.616 9.05079 18.616 7.87579 17.4494L2.55078 12.1243C1.38411 10.9577 1.38411 9.04103 2.55078 7.86603L7.87579 2.54102C9.04246 1.37435 10.9591 1.37435 12.1341 2.54102L17.4591 7.86603C18.6258 9.04103 18.6258 10.9577 17.4591 12.1243Z"
        stroke="#647683"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.20703 5.20898L14.7904 14.7923"
        stroke="#647683"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.7904 5.20898L5.20703 14.7923"
        stroke="#647683"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
