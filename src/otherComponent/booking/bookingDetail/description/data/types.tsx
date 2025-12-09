import {BookingType} from '@screens/booking/data/types';
import {ImageSourcePropType} from 'react-native';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';

export type customerType = {
  image: ImageSourcePropType;
  name: string;
};

export type ServicemenType = {
  image: ImageSourcePropType;
  name: string;
  rating: Float;
  experience: number;
  showArrow: boolean;
};

export type descriptionType = {
  item: BookingDetailsInterface;
  setBookingStatus: React.Dispatch<React.SetStateAction<boolean>>;
  bookingStatus?: string;
  contactOptions?: boolean;
  extraCharges?: extraChargeType | any;
  showChargesDetail?: boolean;
  serviceProof?: any;
  setmodalImage:(value:string)=>void;
  setImageProofModal:(value:boolean)=>void;
};

export type extraChargeType = {
  amount: string;
  name: string;
  noService: number;
};
