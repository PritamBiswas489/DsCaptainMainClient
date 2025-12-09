import {camera, gallery} from '@utils/images';
import {ImageSourcePropType} from 'react-native';

export const data: Array<DataTypes> = [
  {image: gallery, name: 'profileSetting.gallery'},
  {image: camera, name: 'profileSetting.camera'},
];

export interface DataTypes {
  image: ImageSourcePropType;
  name: string;
}
