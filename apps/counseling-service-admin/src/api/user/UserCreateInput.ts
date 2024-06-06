import { AppointmentCreateNestedManyWithoutUsersInput } from "./AppointmentCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
