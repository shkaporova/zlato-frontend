import { IUserBalance } from '../models/user-balance.model';

export const UserBalanceList: IUserBalance[] = [
  {
    idUser: 0,
    totalBalance: 2560.21,
    savings: 780.0,
    totalSpent: 1250.45,
  },
];

export const DataBalance = [
  {
    name: 'Total Balance',
    icon: 'credit_card',
  },
  {
    name: 'Savings',
    icon: 'savings',
  },
  {
    name: 'Total Spent',
    icon: 'payments',
  },
];
