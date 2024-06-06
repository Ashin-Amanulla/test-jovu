import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  date?: Date | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
