export type CategoryType = {
  id: number;
  title?: string;
  showMoreSelected?: boolean;
  showMoredata?: boolean;
};

export type searchModalType = {
  setShowModal: any;
  setSearchModal: any;
  selectedCategory: number[];
  setSelectedCategory: number[] | any;
};

export type categoriesType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
  moreCategoryData?: any;
  selectedCategory: number[];
  setSelectedCategory: number[];
};
