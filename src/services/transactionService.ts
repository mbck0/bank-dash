import { fakeFetch } from "@/api/client";
import transactions from "@/data/transactions.json";
import { Transaction } from "@/types/transaction";

export const getTransactions = async (): Promise<Transaction[]> => {
  return fakeFetch(transactions);
};
