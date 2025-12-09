import {dropDownType} from './types';
export const categoryData: dropDownType[] = [
  {
    value: '1',
    label: 'addNewService.allCategories',
  },
  {
    value: '2',
    label: 'home.acCleaning',
  },
  {
    value: '3',
    label: 'home.cleaning',
  },
  {
    value: '4',
    label: 'home.painting',
  },
  {
    value: '5',
    label: 'home.cooking',
  },
];

export const serviceTimeData: Array<dropDownType> = [
  {label: 'addNewService.hour', value: '1'},
  {label: 'addNewService.minutes', value: '2'},
];

export const taxData: Array<dropDownType> = [
  {label: 'addNewService.gst', value: '1'},
  {label: 'addNewService.vat', value: '2'},
];

export const locationData: Array<dropDownType> = [
  {label: 'location.location', value: '1'},
  {label: 'location.location1', value: '2'},
  {label: 'location.location2', value: '3'},
  {label: 'location.location3', value: '4'},
];
