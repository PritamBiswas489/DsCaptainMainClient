import {dataType, historyType} from './types';
import {
  customer,
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
  customer7,
} from '@utils/images';

export const historyOptions: Array<historyType> = [
  {
    id: 1,
    name: 'common.refresh',
  },
  {
    id: 2,
    name: 'chat.clearChat',
  },
];

export const historyData: Array<dataType> = [
  {
    personName: 'chat.person',
    msg: 'chat.msg',
    time: 'chat.time',
    person: customer,
  },

  {
    personName: 'chat.person',
    msg: 'chat.msg',
    time: 'chat.time',
    person: customer1,
  },

  {
    personName: 'chat.person',
    msg: 'chat.msg',
    time: 'chat.time',
    person: customer2,
  },

  {
    personName: 'chat.person',
    msg: 'chat.msg',
    time: 'chat.time',
    person: customer3,
  },

  {
    personName: 'chat.person',
    msg: 'chat.msg',
    time: 'chat.time',
    person: customer4,
  },

  {
    personName: 'chat.person',
    msg: 'chat.msg',
    time: 'chat.time',
    person: customer5,
  },

  {
    personName: 'chat.person',
    msg: 'chat.msg',
    time: 'chat.time',
    person: customer6,
  },

  {
    personName: 'chat.person',
    msg: 'chat.msg',
    time: 'chat.time',
    person: customer7,
  },
];
