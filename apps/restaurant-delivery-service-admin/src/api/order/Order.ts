import { Food } from "../food/Food";
import { LiveUpdates } from "../liveUpdates/LiveUpdates";
import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  food?: Food | null;
  id: string;
  liveUpdatesItems?: Array<LiveUpdates>;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  user: string | null;
};
