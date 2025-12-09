export type filterDateType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  setIsStartDate: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: string;
  endDate: string;
  showInvalidDateError?: boolean;
};

export type filterType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: number[];
  setSelectedCategory: number[] | any;
  setDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  setIsStartDate: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: string;
  endDate: string;
};
