import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";
import { LiveUpdatesCreateNestedManyWithoutOrdersInput } from "./LiveUpdatesCreateNestedManyWithoutOrdersInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  food?: FoodWhereUniqueInput | null;
  liveUpdatesItems?: LiveUpdatesCreateNestedManyWithoutOrdersInput;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: string | null;
};
