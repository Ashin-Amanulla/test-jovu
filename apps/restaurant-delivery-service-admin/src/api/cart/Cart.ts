import { Food } from "../food/Food";

export type Cart = {
  createdAt: Date;
  food?: Food | null;
  id: string;
  quantity: number | null;
  updatedAt: Date;
  user: string | null;
};
