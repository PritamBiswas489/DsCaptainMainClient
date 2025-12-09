import {ImageSourcePropType} from 'react-native';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

export type serviceType = {
  id: number;
  image: ImageSourcePropType;
  service: string;
  price: number;
  totalBooked: number;
  rate: Float;
  category: string;
  status: boolean;
};
