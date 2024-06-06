import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CounselorWhereUniqueInput } from "../counselor/CounselorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentWhereInput = {
  appointmentReason?: StringNullableFilter;
  appointmentStatus?: "Option1";
  counselor?: CounselorWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
