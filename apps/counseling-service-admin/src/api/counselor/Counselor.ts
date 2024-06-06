import { Appointment } from "../appointment/Appointment";
import { Availability } from "../availability/Availability";

export type Counselor = {
  appointments?: Array<Appointment>;
  availabilities?: Array<Availability>;
  availableTimeSlots: string | null;
  createdAt: Date;
  id: string;
  specialization: string | null;
  updatedAt: Date;
};
