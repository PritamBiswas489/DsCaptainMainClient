import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const NewImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      stroke="#647683"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M5.048 14.775c.614-.66 1.552-.607 2.092.112l.758 1.013c.607.803 1.59.803 2.197 0l.757-1.013c.54-.72 1.478-.772 2.093-.112 1.335 1.425 2.422.952 2.422-1.043V5.28c.008-3.023-.697-3.78-3.532-3.78h-5.67c-2.835 0-3.54.757-3.54 3.78v8.445c0 2.002 1.095 2.467 2.423 1.05ZM6 5.25h6M6.75 8.25h4.5"
    />
  </Svg>
);
