import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  date: Date | null;
  id: string;
  message: string | null;
  updatedAt: Date;
  user?: User | null;
};
