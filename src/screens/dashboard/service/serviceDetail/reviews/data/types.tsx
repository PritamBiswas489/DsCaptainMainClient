import {ImageSourcePropType} from 'react-native';

export type ReviewType = {
  user: ImageSourcePropType;
  name: string;
  time: string;
  review: string;
  rating: string;
};
