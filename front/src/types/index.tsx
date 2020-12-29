export type IconProps = { height: number; width: number; fill: string };

export type TransactionType = 'earning' | 'expense';

export type Transaction = {
  title: string;
  category: string;
  subCategory: string;
  amount: number;
  timestamp: Date;
  type: TransactionType;
};
