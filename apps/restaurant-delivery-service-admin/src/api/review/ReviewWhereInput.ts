import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  food?: FoodWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
  user?: StringNullableFilter;
};
