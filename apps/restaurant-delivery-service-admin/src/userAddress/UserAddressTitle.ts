import { UserAddress as TUserAddress } from "../api/userAddress/UserAddress";

export const USERADDRESS_TITLE_FIELD = "city";

export const UserAddressTitle = (record: TUserAddress): string => {
  return record.city?.toString() || String(record.id);
};
