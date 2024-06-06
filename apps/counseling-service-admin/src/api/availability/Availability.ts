import { Counselor } from "../counselor/Counselor";

export type Availability = {
  counselor?: Counselor | null;
  createdAt: Date;
  date: Date | null;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
};
