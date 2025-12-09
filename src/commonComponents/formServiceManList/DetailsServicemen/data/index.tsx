import {servicemen, servicemen1, servicemen2} from '@utils/images';
import {serviceMenType} from './types';

export const serviceMenListData: Array<serviceMenType> = [
  {
    image: servicemen,
    service: 'serviceMen.service',
    name: 'serviceMen.name',
    sinceYear: 2010,
  },
  {
    image: servicemen1,
    service: 'home.acRepair',
    name: 'serviceMen.name1',
    sinceYear: 2014,
  },
  {
    image: servicemen2,
    service: 'categories.carpenter',
    name: 'serviceMen.name2',
    sinceYear: 2016,
  },
];
