import { CounselorWhereUniqueInput } from "../counselor/CounselorWhereUniqueInput";

export type AvailabilityUpdateInput = {
  counselor?: CounselorWhereUniqueInput | null;
  date?: Date | null;
  endTime?: Date | null;
  startTime?: Date | null;
};
