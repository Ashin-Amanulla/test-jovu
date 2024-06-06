import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  date?: Date | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
