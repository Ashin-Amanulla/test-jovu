import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";

export type CartUpdateInput = {
  food?: FoodWhereUniqueInput | null;
  quantity?: number | null;
  user?: string | null;
};
