import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LiveUpdatesListRelationFilter } from "../liveUpdates/LiveUpdatesListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  food?: FoodWhereUniqueInput;
  id?: StringFilter;
  liveUpdatesItems?: LiveUpdatesListRelationFilter;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  user?: StringNullableFilter;
};
