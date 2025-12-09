export interface CommonModalProps {
  visible: boolean;
  onClose: () => void;
  providerLogin?: boolean;
  setOptionModal: React.Dispatch<React.SetStateAction<boolean>>;
}
