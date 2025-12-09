



import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function ZipCode(props) {
  return (
    <Svg width={props.width ? props.width : "20"} height={props.height ? props.height : "21"} viewBox="0 0 20 21" fill="none">
    <Path d="M10 16.4733C13.4518 16.4733 16.25 13.6367 16.25 10.1375C16.25 6.63837 13.4518 3.80176 10 3.80176C6.54822 3.80176 3.75 6.63837 3.75 10.1375C3.75 13.6367 6.54822 16.4733 10 16.4733Z" stroke="#647683" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M10 12.6711C11.3807 12.6711 12.5 11.5365 12.5 10.1368C12.5 8.73718 11.3807 7.60254 10 7.60254C8.61929 7.60254 7.5 8.73718 7.5 10.1368C7.5 11.5365 8.61929 12.6711 10 12.6711Z" stroke="#647683" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M10 3.37899V1.68945" stroke="#647683" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M3.33464 10.1367H1.66797" stroke="#647683" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M10 16.8955V18.585" stroke="#647683" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M16.668 10.1367H18.3346" stroke="#647683" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}

