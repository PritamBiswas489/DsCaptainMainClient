import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function Chat(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M14.166 7.50033C14.166 10.7253 11.366 13.3337 7.91602 13.3337L7.14102 14.267L6.68269 14.817C6.29102 15.2837 5.54101 15.1836 5.28268 14.6253L4.16602 12.167C2.64935 11.1003 1.66602 9.40866 1.66602 7.50033C1.66602 4.27533 4.46602 1.66699 7.91602 1.66699C10.4327 1.66699 12.6077 3.05866 13.5827 5.05867C13.9577 5.80033 14.166 6.62533 14.166 7.50033Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3342 10.7169C18.3342 12.6252 17.3509 14.3169 15.8342 15.3836L14.7176 17.8419C14.4592 18.4002 13.7092 18.5086 13.3176 18.0336L12.0842 16.5502C10.0676 16.5502 8.26758 15.6586 7.14258 14.2669L7.91757 13.3336C11.3676 13.3336 14.1676 10.7253 14.1676 7.50025C14.1676 6.62525 13.9592 5.80026 13.5842 5.05859C16.3092 5.68359 18.3342 7.98358 18.3342 10.7169Z"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.83398 7.5H10.0007"
        stroke={props.color ? props.color : '#171B27'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
