import {subCategoryType} from '../data/types';
import { SubCategoriesInterface } from '@src/interfaces/subCategoriesInterface';
export type itemType = {
  selectedCategory: SubCategoriesInterface | undefined;
  setCategory: (value:SubCategoriesInterface)=>void;
  item: SubCategoriesInterface;
  index: number;
  flatListRef: any;
};
