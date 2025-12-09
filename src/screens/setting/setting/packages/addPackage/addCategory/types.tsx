import {ViewStyle} from 'react-native';

export type addCategoryType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCategory: number[] | any;
  selectedCategory: number[];
  containerStyle?: ViewStyle;
};
