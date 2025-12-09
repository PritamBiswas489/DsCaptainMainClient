export interface propsType {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: optionType[];
  getSelected: (val: number) => void;
}

export type optionType = {
  id: number;
  name: string;
};
