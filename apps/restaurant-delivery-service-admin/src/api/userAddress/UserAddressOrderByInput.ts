import { SortOrder } from "../../util/SortOrder";

export type UserAddressOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
  zipCode?: SortOrder;
};
