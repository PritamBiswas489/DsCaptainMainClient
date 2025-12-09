import {ImageSourcePropType} from 'react-native';

export type propsType = {
  headerTitle: string;
  content: string;
  image: ImageSourcePropType;
  onButtonClick: () => void;
  onButton1Click: () => void;
  setSelectServiceMenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
