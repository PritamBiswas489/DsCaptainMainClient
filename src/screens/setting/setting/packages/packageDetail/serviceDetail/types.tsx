import {ImageSourcePropType} from 'react-native';
export type packageServiceType = {
  packageId?: number;
  image: ImageSourcePropType;
  serviceName: string;
  price?: number;
  rate: number;
  time?: number;
  serviceMan: number;
};
