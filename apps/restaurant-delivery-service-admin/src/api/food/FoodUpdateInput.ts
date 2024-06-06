import { CartUpdateManyWithoutFoodsInput } from "./CartUpdateManyWithoutFoodsInput";
import { OrderUpdateManyWithoutFoodsInput } from "./OrderUpdateManyWithoutFoodsInput";
import { ReviewUpdateManyWithoutFoodsInput } from "./ReviewUpdateManyWithoutFoodsInput";

export type FoodUpdateInput = {
  carts?: CartUpdateManyWithoutFoodsInput;
  description?: string | null;
  isAvailable?: boolean | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutFoodsInput;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutFoodsInput;
};
