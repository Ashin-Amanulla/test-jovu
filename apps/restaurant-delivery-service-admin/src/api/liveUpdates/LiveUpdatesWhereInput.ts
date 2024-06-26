import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type LiveUpdatesWhereInput = {
  currentLocation?: StringNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  status?: "Option1";
};
