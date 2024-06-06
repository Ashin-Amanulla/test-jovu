import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  profilePicture?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
