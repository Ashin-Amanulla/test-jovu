import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  food?: FoodWhereUniqueInput | null;
  rating?: number | null;
  user?: string | null;
};
