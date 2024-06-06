import { Counselor } from "../counselor/Counselor";
import { User } from "../user/User";

export type Appointment = {
  appointmentReason: string | null;
  appointmentStatus?: "Option1" | null;
  counselor?: Counselor | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
