import { SortOrder } from "../../util/SortOrder";

export type AvailabilityOrderByInput = {
  counselorId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
