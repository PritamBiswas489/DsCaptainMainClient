import {arabic, english, french, hindi, spanish,  lang_bengali, lang_english, lang_hindi} from '@utils/images';
import {CountryDataItemType} from './types';

export const langues: CountryDataItemType[] = [
  {
    name: 'English',
    country: lang_english,
    code: 'en',
  },
  {
    name: 'বাংলা',
    country: lang_bengali,
    code: 'bn',
  },
  {
    name: 'हिन्दी',
    country: lang_hindi,
    code: 'hi',
  },
  
];
