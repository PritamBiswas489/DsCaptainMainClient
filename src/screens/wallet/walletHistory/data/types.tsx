import {ImageSourcePropType} from 'react-native';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

export type historyType = {
  walletId: string;
  image: ImageSourcePropType;
  price: Float;
  customerName: string;
  serviceName: string;
  paymentId: string;
  methodType: string;
  status: string;
};
