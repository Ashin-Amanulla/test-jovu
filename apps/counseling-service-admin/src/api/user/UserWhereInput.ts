import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";

export type UserWhereInput = {
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  profiles?: ProfileListRelationFilter;
  username?: StringFilter;
};
