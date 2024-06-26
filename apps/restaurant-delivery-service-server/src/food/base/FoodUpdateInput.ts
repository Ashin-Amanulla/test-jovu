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
import { CartUpdateManyWithoutFoodsInput } from "./CartUpdateManyWithoutFoodsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { OrderUpdateManyWithoutFoodsInput } from "./OrderUpdateManyWithoutFoodsInput";
import { ReviewUpdateManyWithoutFoodsInput } from "./ReviewUpdateManyWithoutFoodsInput";

@InputType()
class FoodUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CartUpdateManyWithoutFoodsInput,
  })
  @ValidateNested()
  @Type(() => CartUpdateManyWithoutFoodsInput)
  @IsOptional()
  @Field(() => CartUpdateManyWithoutFoodsInput, {
    nullable: true,
  })
  carts?: CartUpdateManyWithoutFoodsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAvailable?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutFoodsInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutFoodsInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutFoodsInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutFoodsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutFoodsInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutFoodsInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutFoodsInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutFoodsInput;
}

export { FoodUpdateInput as FoodUpdateInput };
