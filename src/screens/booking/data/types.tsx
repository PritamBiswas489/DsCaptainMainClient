import {ImageSourcePropType, ViewStyle} from 'react-native';

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
  isPartialPaid?: boolean;
  customers?: CustomerTypes[];
  isAssigned?: boolean;
  isAdvance?: boolean;
  isServiceProgress?: boolean;
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

export type BookingListTypes = {
  data: BookingType[];
  containerStyle?: ViewStyle;
  setCancelBookingModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setAcceptBookingModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AllBookingType = {
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
  gotoScreen: any;
  customers?: CustomerTypes[];
};
