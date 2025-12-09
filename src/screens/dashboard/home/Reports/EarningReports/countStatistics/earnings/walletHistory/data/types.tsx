import {ImageSourcePropType} from 'react-native';

export type WalletHistoryType = {
  detail: string;
  date: string;
  paymentType: string;
  payment: number;
};

export type dataType = {
  icon?: ImageSourcePropType;
  name: string;
};
