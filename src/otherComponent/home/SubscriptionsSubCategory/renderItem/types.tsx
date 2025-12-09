import {subCategoryType} from '../data/types';
import { MySubscriptionInterface } from '@src/interfaces/mySubscriptionInterface';
export type itemType = {
  selectedCategory: MySubscriptionInterface | undefined;
  setCategory: (value:MySubscriptionInterface)=>void;
  item: MySubscriptionInterface;
  index: number;
  flatListRef: any;
};
