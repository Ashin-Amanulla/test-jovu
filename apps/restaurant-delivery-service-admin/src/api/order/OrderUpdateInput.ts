import { FoodWhereUniqueInput } from "../food/FoodWhereUniqueInput";
import { LiveUpdatesUpdateManyWithoutOrdersInput } from "./LiveUpdatesUpdateManyWithoutOrdersInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  food?: FoodWhereUniqueInput | null;
  liveUpdatesItems?: LiveUpdatesUpdateManyWithoutOrdersInput;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: string | null;
};
