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
import { LiveUpdatesWhereInput } from "./LiveUpdatesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LiveUpdatesOrderByInput } from "./LiveUpdatesOrderByInput";

@ArgsType()
class LiveUpdatesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LiveUpdatesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LiveUpdatesWhereInput, { nullable: true })
  @Type(() => LiveUpdatesWhereInput)
  where?: LiveUpdatesWhereInput;

  @ApiProperty({
    required: false,
    type: [LiveUpdatesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LiveUpdatesOrderByInput], { nullable: true })
  @Type(() => LiveUpdatesOrderByInput)
  orderBy?: Array<LiveUpdatesOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LiveUpdatesFindManyArgs as LiveUpdatesFindManyArgs };
