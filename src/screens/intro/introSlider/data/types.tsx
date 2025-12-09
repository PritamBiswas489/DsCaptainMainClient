import {ImageSourcePropType} from 'react-native';

export type CountryDataItemType = {
  name: string;
  country: ImageSourcePropType;
  code: string;
};

export interface CountryDataProps {
  countryData: Array<CountryDataItemType>;
}
