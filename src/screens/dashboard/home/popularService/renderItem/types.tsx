import {ImageSourcePropType} from 'react-native';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

export type popularServiceType = {
  item: itemType;
  index: number;
  providerImageStyle?: imageProps;
  toggleSwitch: (index: number) => void;
};

export type itemType = {
  image: ImageSourcePropType;
  service: string;
  price: number;
  totalBooked: number;
  rate: Float;
  category: string;
  status: boolean;
};

export type imageProps = {
  height?: number;
  width?: number;
};
