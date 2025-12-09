import {FormEvent, ReactNode} from 'react';
import {ImageSourcePropType, ViewStyle} from 'react-native';

export interface NodataProps {
  headerTitle: string;
  image: ImageSourcePropType;
  title: string;
  content: string;
  gradiantBtn: React.ReactNode;
  infoImage: ImageSourcePropType | undefined;
  imageStyle?: ViewStyle;
  showheader?:boolean
}
