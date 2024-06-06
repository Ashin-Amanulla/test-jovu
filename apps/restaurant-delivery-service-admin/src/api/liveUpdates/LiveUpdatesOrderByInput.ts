import { SortOrder } from "../../util/SortOrder";

export type LiveUpdatesOrderByInput = {
  createdAt?: SortOrder;
  currentLocation?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
