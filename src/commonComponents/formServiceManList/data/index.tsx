import {filterType, serviceMenType} from './types';
import {
  servicemen,
  servicemen1,
  servicemen2,
  user5,
  user6,
} from '@utils/images';

export const filterData: Array<filterType> = [
  {
    label: 'servicemen.allServicemen',
    value: '1',
  },
  {
    label: 'servicemen.highestExperience',
    value: '2',
  },
  {
    label: 'servicemen.lowestExperience',
    value: '3',
  },
  {
    label: 'servicemen.highestServed',
    value: '4',
  },
  {
    label: 'servicemen.lowestServed',
    value: '5',
  },
];

export const serviceMenListData: Array<serviceMenType> = [
  {
    image: servicemen,
    name: 'serviceMen.name',
    experience: 2,
  },
  {
    image: servicemen1,
    name: 'serviceMen.name1',
    experience: 2,
  },
  {
    image: servicemen2,
    name: 'serviceMen.name2',
    experience: 2,
  },
  {
    image: user5,
    name: 'serviceMen.name',
    experience: 2,
  },
  {
    image: user6,
    name: 'serviceMen.name',
    experience: 2,
  },
];
