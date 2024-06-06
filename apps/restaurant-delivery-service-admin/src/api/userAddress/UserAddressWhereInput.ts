import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserAddressWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  user?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
