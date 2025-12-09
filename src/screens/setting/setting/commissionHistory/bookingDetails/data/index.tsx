import {customer, packageService} from '@utils/images';
import {customerType, packageServiceType} from './types';

export const packageServices: Array<packageServiceType> = [
  {
    image: packageService,
    serviceName: 'packages.deliciousCooking',
    packageId: 321,
    rate: 3.0,
    serviceMan: 1,
  },
];

export const customerData: Array<customerType> = [
  {image: customer, name: 'providerDetail.username'},
];
