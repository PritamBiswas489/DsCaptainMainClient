import {ImageSourcePropType} from 'react-native';
export type packageServiceType = {
  packageId: number;
  image: ImageSourcePropType;
  serviceName: string;
  rate: number;
  serviceMan: number;
};

export type customerType = {
  image: ImageSourcePropType;
  name: string;
};
