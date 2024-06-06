import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type LiveUpdatesCreateInput = {
  currentLocation?: string | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
