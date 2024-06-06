import { Appointment } from "../appointment/Appointment";
import { Notification } from "../notification/Notification";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  profiles?: Array<Profile>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
