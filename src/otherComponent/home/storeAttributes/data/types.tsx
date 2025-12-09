export type subCategoryType = {
  name: string;
};

export type categoryType = {
  selectedCategory: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};
