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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumAppointmentAppointmentStatus } from "./EnumAppointmentAppointmentStatus";
import { CounselorWhereUniqueInput } from "../../counselor/base/CounselorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class AppointmentWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  appointmentReason?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumAppointmentAppointmentStatus,
  })
  @IsEnum(EnumAppointmentAppointmentStatus)
  @IsOptional()
  @Field(() => EnumAppointmentAppointmentStatus, {
    nullable: true,
  })
  appointmentStatus?: "Option1";

  @ApiProperty({
    required: false,
    type: () => CounselorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CounselorWhereUniqueInput)
  @IsOptional()
  @Field(() => CounselorWhereUniqueInput, {
    nullable: true,
  })
  counselor?: CounselorWhereUniqueInput;

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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { AppointmentWhereInput as AppointmentWhereInput };
