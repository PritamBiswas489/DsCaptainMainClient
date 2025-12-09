import appColors from '@theme/appColors';
import {NotificationListType} from './types';
import {Alert, Clock, NewImage, UpdateIcon} from '@utils/icons';
import {person, person1, servicePerson} from '@utils/images';

export const notificationList: Array<NotificationListType> = [
  {
    title: 'notificationArr.updateBookingStatus',
    time: 'notificationArr.time',
    content: 'notificationArr.content6',
    icon: <Clock color={appColors.primary} />,
    notificationStatus: false,
    image: servicePerson,
    person: person,
  },
  {
    title: 'notificationArr.addBooking',
    time: 'notificationArr.time',
    content: 'notificationArr.content7',
    icon: <Alert />,
    notificationStatus: false,
    image: servicePerson,
    person: person1,
  },
  {
    title: 'notificationArr.addNewImage',
    time: 'notificationArr.time',
    content: 'notificationArr.content1',
    icon: <NewImage />,
    image: servicePerson,
    notificationStatus: true,
  },
  {
    title: 'notificationArr.paymentUpdate',
    time: 'notificationArr.time',
    content: 'notificationArr.content2',
    icon: <UpdateIcon />,
    image: servicePerson,
    notificationStatus: true,
  },
  {
    title: 'notificationArr.paymentUpdate',
    time: 'notificationArr.time1',
    content: 'notificationArr.content3',
    icon: <UpdateIcon />,
    notificationStatus: true,
  },
  {
    title: 'notificationArr.updateStatus',
    time: 'notificationArr.time1',
    content: 'notificationArr.content4',
    icon: <NewImage />,
    notificationStatus: true,
  },
  {
    title: 'notificationArr.reminder',
    time: 'notificationArr.time1',
    content: 'notificationArr.content5',
    icon: <Clock color={appColors.lightText} />,
    notificationStatus: true,
  },
  {
    title: 'notificationArr.paymentUpdate',
    time: 'notificationArr.time1',
    content: 'notificationArr.content5',
    icon: <Clock color={appColors.lightText} />,
    notificationStatus: true,
  },
];
