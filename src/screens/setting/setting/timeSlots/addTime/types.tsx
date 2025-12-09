export type modalProps = {
  showModal: boolean;
  visibleModal: () => void;
  setTimeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setHour: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMinutes: React.Dispatch<React.SetStateAction<number | undefined>>;
  onAddTime: () => void;
};
