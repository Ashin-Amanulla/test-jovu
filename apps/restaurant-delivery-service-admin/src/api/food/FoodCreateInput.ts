import { CartCreateNestedManyWithoutFoodsInput } from "./CartCreateNestedManyWithoutFoodsInput";
import { OrderCreateNestedManyWithoutFoodsInput } from "./OrderCreateNestedManyWithoutFoodsInput";
import { ReviewCreateNestedManyWithoutFoodsInput } from "./ReviewCreateNestedManyWithoutFoodsInput";

export type FoodCreateInput = {
  carts?: CartCreateNestedManyWithoutFoodsInput;
  description?: string | null;
  isAvailable?: boolean | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutFoodsInput;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutFoodsInput;
};
