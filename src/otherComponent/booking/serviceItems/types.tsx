import {ImageSourcePropType, ImageStyle, TextStyle} from 'react-native';
import { BookingListingInterface } from '@src/interfaces/bookingListingInterface';
export type ServiceTypes = {
  serviceImage: ImageSourcePropType;
  serviceName: string;
  price: number;
  bookingId?: string;
  isPackageService?: boolean;
  status: string;
  statusBgColor: string;
};

export interface ServiceItemsProps {
  item: BookingListingInterface;
  imageStyle?: ImageStyle;
  priceStyle?: TextStyle;
  textStyle?: TextStyle;
}
