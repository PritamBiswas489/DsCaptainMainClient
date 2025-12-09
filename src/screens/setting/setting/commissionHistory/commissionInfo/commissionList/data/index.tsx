import {
  AcRepair,
  Carpenter,
  Cleaning,
  Cooking,
  Electrician,
  Painting,
  Plumber,
  Salon,
} from '@utils/icons';
import {dataTypes} from './types';

export const data: Array<dataTypes> = [
  {
    icon: <Salon />,
    name: 'home.salon',
    commission: 20,
  },
  {
    icon: <Carpenter />,
    name: 'home.carpenter',
    commission: 15,
  },
  {
    icon: <Cooking />,
    name: 'home.cooking',
    commission: 10,
  },
  {
    icon: <Painting />,
    name: 'home.painting',
    commission: 12,
  },
  {
    icon: <Plumber />,
    name: 'categories.plumber',
    commission: 18,
  },
  {
    icon: <Electrician />,
    name: 'categories.electrician',
    commission: 20,
  },
  {
    icon: <AcRepair />,
    name: 'home.acRepair',
    commission: 20,
  },
  {
    icon: <Cleaning />,
    name: 'home.cleaning',
    commission: 25,
  },
];
