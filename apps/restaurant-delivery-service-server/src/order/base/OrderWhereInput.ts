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
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { LiveUpdatesListRelationFilter } from "../../liveUpdates/base/LiveUpdatesListRelationFilter";
import { PaymentListRelationFilter } from "../../payment/base/PaymentListRelationFilter";
import { EnumOrderStatus } from "./EnumOrderStatus";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class OrderWhereInput {
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
  food?: FoodWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LiveUpdatesListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LiveUpdatesListRelationFilter)
  @IsOptional()
  @Field(() => LiveUpdatesListRelationFilter, {
    nullable: true,
  })
  liveUpdatesItems?: LiveUpdatesListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentListRelationFilter)
  @IsOptional()
  @Field(() => PaymentListRelationFilter, {
    nullable: true,
  })
  payments?: PaymentListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  totalAmount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  user?: StringNullableFilter;
}

export { OrderWhereInput as OrderWhereInput };
