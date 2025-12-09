import {arabic, english, french, lang_bengali, lang_english, lang_hindi, spanish} from '@utils/images';
import {ImageSourcePropType} from 'react-native';

export const languages: Array<dataType> = [
  {icon: lang_english, name: 'English', code: 'en'},
  {icon: lang_bengali, name: 'বাংলা', code: 'bn'},
  {icon: lang_hindi, name: 'हिन्दी', code: 'hi'},
];

export type dataType = {
  icon: ImageSourcePropType;
  name: string;
  code: string;
};
