/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FoodWhereUniqueInput } from "../../food/base/FoodWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { LiveUpdatesUpdateManyWithoutOrdersInput } from "./LiveUpdatesUpdateManyWithoutOrdersInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { EnumOrderStatus } from "./EnumOrderStatus";

@InputType()
class OrderUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FoodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FoodWhereUniqueInput)
  @IsOptional()
  @Field(() => FoodWhereUniqueInput, {
    nullable: true,
  })
  food?: FoodWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => LiveUpdatesUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => LiveUpdatesUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => LiveUpdatesUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  liveUpdatesItems?: LiveUpdatesUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  user?: string | null;
}

export { OrderUpdateInput as OrderUpdateInput };
