import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Food = {
  carts?: Array<Cart>;
  createdAt: Date;
  description: string | null;
  id: string;
  isAvailable: boolean | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
