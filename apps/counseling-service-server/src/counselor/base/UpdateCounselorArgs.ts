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
import { CounselorWhereUniqueInput } from "./CounselorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CounselorUpdateInput } from "./CounselorUpdateInput";

@ArgsType()
class UpdateCounselorArgs {
  @ApiProperty({
    required: true,
    type: () => CounselorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CounselorWhereUniqueInput)
  @Field(() => CounselorWhereUniqueInput, { nullable: false })
  where!: CounselorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CounselorUpdateInput,
  })
  @ValidateNested()
  @Type(() => CounselorUpdateInput)
  @Field(() => CounselorUpdateInput, { nullable: false })
  data!: CounselorUpdateInput;
}

export { UpdateCounselorArgs as UpdateCounselorArgs };
