import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
