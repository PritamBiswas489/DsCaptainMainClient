import {ImageSourcePropType} from 'react-native';

export type historyType = {
  id: number;
  name: string;
};

export type dataType = {
  personName: string;
  msg: string;
  time: string;
  person: ImageSourcePropType;
};
