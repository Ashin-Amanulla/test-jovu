/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FoodWhereUniqueInput } from "./FoodWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FoodUpdateInput } from "./FoodUpdateInput";

@ArgsType()
class UpdateFoodArgs {
  @ApiProperty({
    required: true,
    type: () => FoodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FoodWhereUniqueInput)
  @Field(() => FoodWhereUniqueInput, { nullable: false })
  where!: FoodWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FoodUpdateInput,
  })
  @ValidateNested()
  @Type(() => FoodUpdateInput)
  @Field(() => FoodUpdateInput, { nullable: false })
  data!: FoodUpdateInput;
}

export { UpdateFoodArgs as UpdateFoodArgs };
