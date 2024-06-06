import { AppointmentCreateNestedManyWithoutCounselorsInput } from "./AppointmentCreateNestedManyWithoutCounselorsInput";
import { AvailabilityCreateNestedManyWithoutCounselorsInput } from "./AvailabilityCreateNestedManyWithoutCounselorsInput";

export type CounselorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutCounselorsInput;
  availabilities?: AvailabilityCreateNestedManyWithoutCounselorsInput;
  availableTimeSlots?: string | null;
  specialization?: string | null;
};
