import {ImageSourcePropType} from 'react-native';

export type filterType = {
  label: string;
  value: string;
};

export type serviceMenType = {
  image: ImageSourcePropType;
  service?: string;
  name: string;
  sinceYear?: number;
  experience?: number;
};
