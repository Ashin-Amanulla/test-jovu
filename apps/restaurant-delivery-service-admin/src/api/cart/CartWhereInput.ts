import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CartWhereInput = {
  food?: FoodWhereUniqueInput;
  id?: StringFilter;
  quantity?: IntNullableFilter;
  user?: StringNullableFilter;
};
