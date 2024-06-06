import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type LiveUpdatesUpdateInput = {
  currentLocation?: string | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
