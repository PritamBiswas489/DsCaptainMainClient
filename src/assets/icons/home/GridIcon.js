import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function GridIcon(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M4.16797 8.33317H5.83464C7.5013 8.33317 8.33464 7.49984 8.33464 5.83317V4.1665C8.33464 2.49984 7.5013 1.6665 5.83464 1.6665H4.16797C2.5013 1.6665 1.66797 2.49984 1.66797 4.1665V5.83317C1.66797 7.49984 2.5013 8.33317 4.16797 8.33317Z"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.168 8.33317H15.8346C17.5013 8.33317 18.3346 7.49984 18.3346 5.83317V4.1665C18.3346 2.49984 17.5013 1.6665 15.8346 1.6665H14.168C12.5013 1.6665 11.668 2.49984 11.668 4.1665V5.83317C11.668 7.49984 12.5013 8.33317 14.168 8.33317Z"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.168 18.3332H15.8346C17.5013 18.3332 18.3346 17.4998 18.3346 15.8332V14.1665C18.3346 12.4998 17.5013 11.6665 15.8346 11.6665H14.168C12.5013 11.6665 11.668 12.4998 11.668 14.1665V15.8332C11.668 17.4998 12.5013 18.3332 14.168 18.3332Z"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.16797 18.3332H5.83464C7.5013 18.3332 8.33464 17.4998 8.33464 15.8332V14.1665C8.33464 12.4998 7.5013 11.6665 5.83464 11.6665H4.16797C2.5013 11.6665 1.66797 12.4998 1.66797 14.1665V15.8332C1.66797 17.4998 2.5013 18.3332 4.16797 18.3332Z"
        stroke={props.color ? props.color : '#171B27'}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
