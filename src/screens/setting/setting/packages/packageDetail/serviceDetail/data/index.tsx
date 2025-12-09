import {packageService, packageService1} from '@utils/images';
import {packageServiceType} from '../types';

export const packageServices: Array<packageServiceType> = [
  {
    image: packageService,
    serviceName: 'packages.deliciousCooking',
    price: 26.54,
    rate: 3.0,
    time: 20,
    serviceMan: 1,
  },
  {
    image: packageService1,
    serviceName: 'categories.service',
    price: 26.54,
    rate: 3.0,
    time: 20,
    serviceMan: 1,
  },
];
