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
import { MenuService } from "../menu.service";
import { MenuCreateInput } from "./MenuCreateInput";
import { Menu } from "./Menu";
import { MenuFindManyArgs } from "./MenuFindManyArgs";
import { MenuWhereUniqueInput } from "./MenuWhereUniqueInput";
import { MenuUpdateInput } from "./MenuUpdateInput";

export class MenuControllerBase {
  constructor(protected readonly service: MenuService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Menu })
  async createMenu(@common.Body() data: MenuCreateInput): Promise<Menu> {
    return await this.service.createMenu({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Menu] })
  @ApiNestedQuery(MenuFindManyArgs)
  async menus(@common.Req() request: Request): Promise<Menu[]> {
    const args = plainToClass(MenuFindManyArgs, request.query);
    return this.service.menus({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async menu(
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<Menu | null> {
    const result = await this.service.menu({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        isActive: true,
        name: true,
        price: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMenu(
    @common.Param() params: MenuWhereUniqueInput,
    @common.Body() data: MenuUpdateInput
  ): Promise<Menu | null> {
    try {
      return await this.service.updateMenu({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          price: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Menu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMenu(
    @common.Param() params: MenuWhereUniqueInput
  ): Promise<Menu | null> {
    try {
      return await this.service.deleteMenu({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          isActive: true,
          name: true,
          price: true,
          updatedAt: true,
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
}
