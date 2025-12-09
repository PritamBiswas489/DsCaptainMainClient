import {ImageSourcePropType} from 'react-native';

export type ReviewType = {
  id: string;
  userName: string;
  userImage: string;
  timing: string;
  reviewText: string;
  rating: string;  // Assuming rating is a number, adjust if it's a string
  servicename:string,
  gender:string
};
