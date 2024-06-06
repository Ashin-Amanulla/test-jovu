import { CounselorWhereUniqueInput } from "../counselor/CounselorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AvailabilityWhereInput = {
  counselor?: CounselorWhereUniqueInput;
  date?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
};
