import {customer, customer2} from '@utils/images';
import {customerType, ServicemenType} from './types';

export const customerData: Array<customerType> = [
  {image: customer, name: 'providerDetail.username'},
];

export const serviceMenData: Array<ServicemenType> = [
  {
    image: customer2,
    name: 'providerDetail.serviceMenName',
    rating: 3.0,
    experience: 3,
    showArrow: true,
  },
];
