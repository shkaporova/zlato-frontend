import { MainCategories, SubCategories } from './category.model';

export interface ITransaction {
  id: number;
  date: string;
  amount: number;
  img: string;
  mainCategory: MainCategories;
  subCategory?: SubCategories;
}
