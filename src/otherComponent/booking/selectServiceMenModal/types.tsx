export type propsType = {
  serviceMenOptions: number;
  setSelectedOptions: React.Dispatch<React.SetStateAction<number>>;
  gotoScreen: () => void;
  setSelectServiceMenModal: React.Dispatch<React.SetStateAction<boolean>>;
};
