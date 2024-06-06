import { Food } from "../food/Food";

export type Review = {
  comment: string | null;
  createdAt: Date;
  food?: Food | null;
  id: string;
  rating: number | null;
  updatedAt: Date;
  user: string | null;
};
