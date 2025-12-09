import {ImageSourcePropType, ViewStyle} from 'react-native';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

export type popularServiceType = {
  image: ImageSourcePropType;
  service: string;
  price: number;
  totalBooked: number;
  rate: Float;
  category: string;
  status: boolean;
};

export type dataType = {
  data: popularServiceType[];
  setData: any;
  isHorizontal?: boolean;
  providerImageStyle?: imageProps;
  itemSeparator?: ViewStyle;
  contentContainerStyle?:ViewStyle
};

export type imageProps = {
  height?: number;
  width?: number;
};
