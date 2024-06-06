import { CounselorWhereUniqueInput } from "../counselor/CounselorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentCreateInput = {
  appointmentReason?: string | null;
  appointmentStatus?: "Option1" | null;
  counselor?: CounselorWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
