import {ImageSourcePropType} from 'react-native';

export type BookingType = {
  isPackageService?: boolean;
  status: string;
  statusBgColor: string;
  serviceImage: ImageSourcePropType;
  serviceName: string;
  bookingId: string;
  price: number;
  offer?: number;
  date: string;
  time: string;
  totalServiceMan: number;
  location?: string;
  isPaid?: boolean;
  serviceMans?: ServiceManTypes[];
  gotoScreen: any;
  description?: string;
  isPartialPaid?: boolean;
  customers?: CustomerTypes[];
  isAssigned?: boolean;
  isAdvance?: boolean;
};

export type ServiceManTypes = {
  serviceManImage: ImageSourcePropType;
  serviceManName: string;
  serviceManRating: number;
  showMore?: boolean;
};

export type CustomerTypes = {
  customerImage: ImageSourcePropType;
  customerName: string;
};
