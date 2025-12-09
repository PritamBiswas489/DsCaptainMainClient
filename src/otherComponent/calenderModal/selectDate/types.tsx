export type calenderType = {
  setDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: string;
  endDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  isStartDate: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
};
