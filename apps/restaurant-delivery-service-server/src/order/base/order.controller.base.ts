/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OrderService } from "../order.service";
import { OrderCreateInput } from "./OrderCreateInput";
import { Order } from "./Order";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { LiveUpdatesFindManyArgs } from "../../liveUpdates/base/LiveUpdatesFindManyArgs";
import { LiveUpdates } from "../../liveUpdates/base/LiveUpdates";
import { LiveUpdatesWhereUniqueInput } from "../../liveUpdates/base/LiveUpdatesWhereUniqueInput";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";

export class OrderControllerBase {
  constructor(protected readonly service: OrderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  async createOrder(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.createOrder({
      data: {
        ...data,

        food: data.food
          ? {
              connect: data.food,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        food: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        totalAmount: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  async orders(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.orders({
      ...args,
      select: {
        createdAt: true,

        food: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        totalAmount: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async order(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const result = await this.service.order({
      where: params,
      select: {
        createdAt: true,

        food: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
        totalAmount: true,
        updatedAt: true,
        user: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOrder(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        where: params,
        data: {
          ...data,

          food: data.food
            ? {
                connect: data.food,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          food: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          totalAmount: true,
          updatedAt: true,
          user: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOrder(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder({
        where: params,
        select: {
          createdAt: true,

          food: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
          totalAmount: true,
          updatedAt: true,
          user: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/liveUpdatesItems")
  @ApiNestedQuery(LiveUpdatesFindManyArgs)
  async findLiveUpdatesItems(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<LiveUpdates[]> {
    const query = plainToClass(LiveUpdatesFindManyArgs, request.query);
    const results = await this.service.findLiveUpdatesItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        currentLocation: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/liveUpdatesItems")
  async connectLiveUpdatesItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: LiveUpdatesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      liveUpdatesItems: {
        connect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/liveUpdatesItems")
  async updateLiveUpdatesItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: LiveUpdatesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      liveUpdatesItems: {
        set: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/liveUpdatesItems")
  async disconnectLiveUpdatesItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: LiveUpdatesWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      liveUpdatesItems: {
        disconnect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/payments")
  @ApiNestedQuery(PaymentFindManyArgs)
  async findPayments(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Payment[]> {
    const query = plainToClass(PaymentFindManyArgs, request.query);
    const results = await this.service.findPayments(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        paymentMethod: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payments")
  async connectPayments(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        connect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payments")
  async updatePayments(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        set: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payments")
  async disconnectPayments(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        disconnect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }
}
