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
import { IsString, IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumAppointmentAppointmentStatus } from "./EnumAppointmentAppointmentStatus";
import { CounselorWhereUniqueInput } from "../../counselor/base/CounselorWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class AppointmentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  appointmentReason?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAppointmentAppointmentStatus,
  })
  @IsEnum(EnumAppointmentAppointmentStatus)
  @IsOptional()
  @Field(() => EnumAppointmentAppointmentStatus, {
    nullable: true,
  })
  appointmentStatus?: "Option1" | null;

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
  counselor?: CounselorWhereUniqueInput | null;

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
  user?: UserWhereUniqueInput | null;
}

export { AppointmentUpdateInput as AppointmentUpdateInput };
