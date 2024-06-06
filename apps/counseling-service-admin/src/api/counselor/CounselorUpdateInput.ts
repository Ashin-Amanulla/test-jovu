import { AppointmentUpdateManyWithoutCounselorsInput } from "./AppointmentUpdateManyWithoutCounselorsInput";
import { AvailabilityUpdateManyWithoutCounselorsInput } from "./AvailabilityUpdateManyWithoutCounselorsInput";

export type CounselorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutCounselorsInput;
  availabilities?: AvailabilityUpdateManyWithoutCounselorsInput;
  availableTimeSlots?: string | null;
  specialization?: string | null;
};
