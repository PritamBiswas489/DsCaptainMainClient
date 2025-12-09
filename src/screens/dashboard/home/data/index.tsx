import {service, customer, service8, customer1, customer2} from '@utils/images';
import {BookingType} from '@otherComponent/booking/types/types';
import appColors from '@theme/appColors';

export const BookingData: Array<BookingType> = [
  {
    isPackageService: true,
    status: 'booking.pending',
    serviceImage: service,
    serviceName: 'booking.service',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 2,
    location: 'booking.location',
    isPaid: false,
    statusBgColor: appColors.pending,
    gotoScreen: 'PendingBooking',
    isAssigned: true,
    customers: [
      {
        customerImage: customer,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    isPackageService: false,
    status: 'booking.pending',
    serviceImage: service8,
    serviceName: 'booking.service1',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 2,
    location: 'booking.location',
    statusBgColor: appColors.pending,
    gotoScreen: 'PendingBooking',
    isPaid: false,
    customers: [
      {
        customerImage: customer1,
        customerName: 'booking.serviceMan',
      },
    ],
    serviceMans: [
      {
        serviceManImage: customer2,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: false,
      },
    ],
  },
];

export const TodayData: Array<BookingType> = [
  {
    isPackageService: false,
    status: 'booking.pending',
    serviceImage: service8,
    serviceName: 'booking.service1',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 2,
    location: 'booking.location',
    statusBgColor: appColors.pending,
    gotoScreen: 'PendingBooking',
    isPaid: false,
    customers: [
      {
        customerImage: customer1,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    isPackageService: false,
    status: 'booking.pending',
    serviceImage: service8,
    serviceName: 'booking.service1',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 2,
    location: 'booking.location',
    statusBgColor: appColors.pending,
    gotoScreen: 'PendingBooking',
    isPaid: false,
    customers: [
      {
        customerImage: customer1,
        customerName: 'booking.serviceMan',
      },
    ],
  },
];
