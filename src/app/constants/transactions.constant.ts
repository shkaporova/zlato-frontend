import { ITransaction } from '../models/transaction.model';
import {
  FoodCategories,
  MainCategories,
  BillsCategories,
  TransportationCategories,
  ShoppingCategories,
  EntertainmentCategories,
  HealthCategories,
} from '../models/category.model';

export const transactions: ITransaction[] = [
  {
    id: 0,
    date: Date.now().toString(),
    amount: 145,
    img: 'restaurant',
    mainCategory: MainCategories.FOOD,
    subCategory: FoodCategories.RESTAURANT,
  },
  {
    id: 1,
    date: Date.now().toString(),
    amount: 15,
    img: 'sports_esports',
    mainCategory: MainCategories.ENTERTAINMENT,
    subCategory: EntertainmentCategories.GAMES,
  },
  {
    id: 2,
    date: Date.now().toString(),
    amount: 50,
    img: 'family_restroom',
    mainCategory: MainCategories.FAMILY,
  },
  {
    id: 3,
    date: Date.now().toString(),
    amount: 25,
    img: 'shopping_cart',
    mainCategory: MainCategories.SHOPPING,
    subCategory: ShoppingCategories.ELECTRONICS,
  },
];
