import { SortOrder } from "../../util/SortOrder";

export type CartOrderByInput = {
  createdAt?: SortOrder;
  foodId?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
