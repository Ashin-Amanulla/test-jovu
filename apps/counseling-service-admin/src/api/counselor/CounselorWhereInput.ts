import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CounselorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  availabilities?: AvailabilityListRelationFilter;
  availableTimeSlots?: StringNullableFilter;
  id?: StringFilter;
  specialization?: StringNullableFilter;
};
