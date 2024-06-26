/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Food as PrismaFood,
  Cart as PrismaCart,
  Order as PrismaOrder,
  Review as PrismaReview,
} from "@prisma/client";

export class FoodServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FoodCountArgs, "select">): Promise<number> {
    return this.prisma.food.count(args);
  }

  async foods<T extends Prisma.FoodFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FoodFindManyArgs>
  ): Promise<PrismaFood[]> {
    return this.prisma.food.findMany<Prisma.FoodFindManyArgs>(args);
  }
  async food<T extends Prisma.FoodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FoodFindUniqueArgs>
  ): Promise<PrismaFood | null> {
    return this.prisma.food.findUnique(args);
  }
  async createFood<T extends Prisma.FoodCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FoodCreateArgs>
  ): Promise<PrismaFood> {
    return this.prisma.food.create<T>(args);
  }
  async updateFood<T extends Prisma.FoodUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FoodUpdateArgs>
  ): Promise<PrismaFood> {
    return this.prisma.food.update<T>(args);
  }
  async deleteFood<T extends Prisma.FoodDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FoodDeleteArgs>
  ): Promise<PrismaFood> {
    return this.prisma.food.delete(args);
  }

  async findCarts(
    parentId: string,
    args: Prisma.CartFindManyArgs
  ): Promise<PrismaCart[]> {
    return this.prisma.food
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .carts(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.food
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findReviews(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<PrismaReview[]> {
    return this.prisma.food
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }
}
