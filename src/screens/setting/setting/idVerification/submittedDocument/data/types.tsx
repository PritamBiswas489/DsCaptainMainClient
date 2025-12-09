import {ImageSourcePropType} from 'react-native';

export type documentType = {
  name: string;
  documentId?: string;
  isPending: boolean;
  image: ImageSourcePropType;
};
export type moreOptionType = {
  id: number;
  name: string;
};
