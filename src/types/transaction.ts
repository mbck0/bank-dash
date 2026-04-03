export type TransactionType = "income" | "expense" | "transfer";

export interface Transaction {
  id: string;
  accountId: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
}
