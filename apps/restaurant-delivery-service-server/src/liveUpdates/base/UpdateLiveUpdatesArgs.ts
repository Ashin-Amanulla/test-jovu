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
import { LiveUpdatesWhereUniqueInput } from "./LiveUpdatesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LiveUpdatesUpdateInput } from "./LiveUpdatesUpdateInput";

@ArgsType()
class UpdateLiveUpdatesArgs {
  @ApiProperty({
    required: true,
    type: () => LiveUpdatesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LiveUpdatesWhereUniqueInput)
  @Field(() => LiveUpdatesWhereUniqueInput, { nullable: false })
  where!: LiveUpdatesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LiveUpdatesUpdateInput,
  })
  @ValidateNested()
  @Type(() => LiveUpdatesUpdateInput)
  @Field(() => LiveUpdatesUpdateInput, { nullable: false })
  data!: LiveUpdatesUpdateInput;
}

export { UpdateLiveUpdatesArgs as UpdateLiveUpdatesArgs };