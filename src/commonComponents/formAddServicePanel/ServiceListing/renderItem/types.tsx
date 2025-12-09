import {ImageSourcePropType} from 'react-native';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import { ServiceInterface, ServiceVariantInterface } from '@src/interfaces/serviceInterface';

export type popularServiceType = {
  item: ServiceInterface;
  index: number;
  providerImageStyle?: imageProps;
  toggleSwitch: (index: number) => void;
  selectedServiceVariants:ServiceInterface,
  setSelectedServiceVariants:(value:ServiceInterface)=>void
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
