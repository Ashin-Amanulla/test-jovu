import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  profilePicture?: JsonFilter;
  user?: UserWhereUniqueInput;
};
