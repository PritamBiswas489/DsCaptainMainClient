import {serviceBg} from '@utils/images';
import {ImageSourcePropType} from 'react-native';

export const sliderData: Array<SliderProps> = [
  {
    image: serviceBg,
  },
  {
    image: serviceBg,
  },
  {
    image: serviceBg,
  },
];

export type SliderProps = {
  image: ImageSourcePropType;
};
