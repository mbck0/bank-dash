import { fakeFetch } from "@/api/client";
import accounts from "@/data/accounts.json";
import { Account } from "@/types/account";

export const getAccounts = async (): Promise<Account[]> => {
  return fakeFetch(accounts);
};
