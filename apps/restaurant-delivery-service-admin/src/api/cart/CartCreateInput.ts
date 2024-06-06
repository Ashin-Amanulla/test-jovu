import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";

export type CartCreateInput = {
  food?: FoodWhereUniqueInput | null;
  quantity?: number | null;
  user?: string | null;
};
