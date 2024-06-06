import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "password";

export const AccountTitle = (record: TAccount): string => {
  return record.password?.toString() || String(record.id);
};
