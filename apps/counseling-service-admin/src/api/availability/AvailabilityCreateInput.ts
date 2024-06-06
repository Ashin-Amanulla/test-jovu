import { CounselorWhereUniqueInput } from "../counselor/CounselorWhereUniqueInput";

export type AvailabilityCreateInput = {
  counselor?: CounselorWhereUniqueInput | null;
  date?: Date | null;
  endTime?: Date | null;
  startTime?: Date | null;
};
