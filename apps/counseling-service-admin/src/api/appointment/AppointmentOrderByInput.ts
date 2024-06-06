import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentReason?: SortOrder;
  appointmentStatus?: SortOrder;
  counselorId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
