/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserAddress } from "./UserAddress";
import { UserAddressCountArgs } from "./UserAddressCountArgs";
import { UserAddressFindManyArgs } from "./UserAddressFindManyArgs";
import { UserAddressFindUniqueArgs } from "./UserAddressFindUniqueArgs";
import { CreateUserAddressArgs } from "./CreateUserAddressArgs";
import { UpdateUserAddressArgs } from "./UpdateUserAddressArgs";
import { DeleteUserAddressArgs } from "./DeleteUserAddressArgs";
import { UserAddressService } from "../userAddress.service";
@graphql.Resolver(() => UserAddress)
export class UserAddressResolverBase {
  constructor(protected readonly service: UserAddressService) {}

  async _userAddressesMeta(
    @graphql.Args() args: UserAddressCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserAddress])
  async userAddresses(
    @graphql.Args() args: UserAddressFindManyArgs
  ): Promise<UserAddress[]> {
    return this.service.userAddresses(args);
  }

  @graphql.Query(() => UserAddress, { nullable: true })
  async userAddress(
    @graphql.Args() args: UserAddressFindUniqueArgs
  ): Promise<UserAddress | null> {
    const result = await this.service.userAddress(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserAddress)
  async createUserAddress(
    @graphql.Args() args: CreateUserAddressArgs
  ): Promise<UserAddress> {
    return await this.service.createUserAddress({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UserAddress)
  async updateUserAddress(
    @graphql.Args() args: UpdateUserAddressArgs
  ): Promise<UserAddress | null> {
    try {
      return await this.service.updateUserAddress({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserAddress)
  async deleteUserAddress(
    @graphql.Args() args: DeleteUserAddressArgs
  ): Promise<UserAddress | null> {
    try {
      return await this.service.deleteUserAddress(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
