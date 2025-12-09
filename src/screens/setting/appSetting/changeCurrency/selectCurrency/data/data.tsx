import {au, euro, inr, us} from '@utils/images';
import {ImageSourcePropType} from 'react-native';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

export const currency: Array<dataType> = [
  {icon: us, name: 'profileSetting.usDollar', value: 0.013, key: '$'},
  {icon: euro, name: 'profileSetting.euro', value: 0.012, key: '€'},
  {icon: inr, name: 'profileSetting.inr', value: 1, key: '₹'},
  {
    icon: au,
    name: 'profileSetting.australia',
    value: 0.018,
    key: 'A$',
  },
];

export type dataType = {
  icon: ImageSourcePropType;
  name: string;
  value: Float;
  key: string;
};
