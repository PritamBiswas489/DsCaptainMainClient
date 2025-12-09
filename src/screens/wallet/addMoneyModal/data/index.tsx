import {razorPay, stripe} from '@utils/images';
import {paymentTypes} from './types';

export const paymentOptions: Array<paymentTypes> = [
  {
    icon: razorPay,
    label:'wallet.razorPay',
    value: '1',
  },
  {
    icon: stripe,
    label:'wallet.stripe',
    value: '1',
  },
];
