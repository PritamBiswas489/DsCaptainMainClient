import {service3, service4, service5} from '@utils/images';
import {serviceType} from './types';

export const data: Array<serviceType> = [
  {
    id: 1,
    image: service3,
    service: 'categories.service',
    price: 30,
    totalBooked: 120,
    rate: 3.5,
    category: 'home.acRepair',
    status: false,
  },
  {
    id: 2,
    image: service4,
    service: 'home.homeService',
    price: 30,
    totalBooked: 120,
    rate: 2.5,
    category: 'home.acRepair',
    status: false,
  },
  {
    id: 3,
    image: service5,
    service: 'home.homeService',
    price: 30,
    totalBooked: 120,
    rate: 2.5,
    category: 'home.acRepair',
    status: false,
  },
];
