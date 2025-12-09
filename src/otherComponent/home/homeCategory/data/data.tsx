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
import {HomeCategoryType} from './types';

export const category: Array<HomeCategoryType> = [
  {
    icon: <Salon height={'36'} width={'36'} />,
    title: 'categories.salon',
  },
  {
    icon: <Painting height={'36'} width={'36'} />,
    title: 'categories.painting',
  },
  {
    icon: <Plumber height={'36'} width={'36'} />,
    title: 'categories.plumber',
  },
  {
    icon: <AcRepair height={'36'} width={'36'} />,
    title: 'categories.acRepair',
  },
  {
    icon: <Carpenter height={'36'} width={'36'} />,
    title: 'categories.carpenter',
  },
  {
    icon: <Electrician height={'36'} width={'36'} />,
    title: 'categories.electrician',
  },
  {
    icon: <Cooking height={'36'} width={'36'} />,
    title: 'categories.cooking',
  },
  {
    icon: <Cleaning height={'36'} width={'36'} />,
    title: 'categories.cleaning',
  },
];
