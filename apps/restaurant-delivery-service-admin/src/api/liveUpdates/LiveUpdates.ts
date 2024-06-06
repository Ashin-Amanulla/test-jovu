import { Order } from "../order/Order";

export type LiveUpdates = {
  createdAt: Date;
  currentLocation: string | null;
  id: string;
  order?: Order | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
