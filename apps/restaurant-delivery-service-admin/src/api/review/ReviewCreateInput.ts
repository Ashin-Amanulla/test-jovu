import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  food?: FoodWhereUniqueInput | null;
  rating?: number | null;
  user?: string | null;
};
