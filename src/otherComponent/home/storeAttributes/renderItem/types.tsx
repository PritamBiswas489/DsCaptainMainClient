import {subCategoryType} from '../data/types';
import { AttributeInterface } from '@src/interfaces/store/attributes.interface';
export type itemType = {
  selectedCategory: number[] | undefined;
  setCategory: (value:AttributeInterface)=>void;
  item: AttributeInterface;
  index: number;
  flatListRef: any;
};
