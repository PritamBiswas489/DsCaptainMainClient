export type itemType = {
  selectedCategory: string | undefined;
  setCategory: (value:string)=>void;
  item: string;
  index: number;
  flatListRef: any;
};
