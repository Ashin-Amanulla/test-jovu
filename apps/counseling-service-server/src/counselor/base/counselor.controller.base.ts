/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CounselorService } from "../counselor.service";
import { CounselorCreateInput } from "./CounselorCreateInput";
import { Counselor } from "./Counselor";
import { CounselorFindManyArgs } from "./CounselorFindManyArgs";
import { CounselorWhereUniqueInput } from "./CounselorWhereUniqueInput";
import { CounselorUpdateInput } from "./CounselorUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { AvailabilityFindManyArgs } from "../../availability/base/AvailabilityFindManyArgs";
import { Availability } from "../../availability/base/Availability";
import { AvailabilityWhereUniqueInput } from "../../availability/base/AvailabilityWhereUniqueInput";

export class CounselorControllerBase {
  constructor(protected readonly service: CounselorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Counselor })
  async createCounselor(
    @common.Body() data: CounselorCreateInput
  ): Promise<Counselor> {
    return await this.service.createCounselor({
      data: data,
      select: {
        availableTimeSlots: true,
        createdAt: true,
        id: true,
        specialization: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Counselor] })
  @ApiNestedQuery(CounselorFindManyArgs)
  async counselors(@common.Req() request: Request): Promise<Counselor[]> {
    const args = plainToClass(CounselorFindManyArgs, request.query);
    return this.service.counselors({
      ...args,
      select: {
        availableTimeSlots: true,
        createdAt: true,
        id: true,
        specialization: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Counselor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async counselor(
    @common.Param() params: CounselorWhereUniqueInput
  ): Promise<Counselor | null> {
    const result = await this.service.counselor({
      where: params,
      select: {
        availableTimeSlots: true,
        createdAt: true,
        id: true,
        specialization: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Counselor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCounselor(
    @common.Param() params: CounselorWhereUniqueInput,
    @common.Body() data: CounselorUpdateInput
  ): Promise<Counselor | null> {
    try {
      return await this.service.updateCounselor({
        where: params,
        data: data,
        select: {
          availableTimeSlots: true,
          createdAt: true,
          id: true,
          specialization: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Counselor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCounselor(
    @common.Param() params: CounselorWhereUniqueInput
  ): Promise<Counselor | null> {
    try {
      return await this.service.deleteCounselor({
        where: params,
        select: {
          availableTimeSlots: true,
          createdAt: true,
          id: true,
          specialization: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: CounselorWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        appointmentReason: true,
        appointmentStatus: true,

        counselor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  async connectAppointments(
    @common.Param() params: CounselorWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateCounselor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  async updateAppointments(
    @common.Param() params: CounselorWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateCounselor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  async disconnectAppointments(
    @common.Param() params: CounselorWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateCounselor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/availabilities")
  @ApiNestedQuery(AvailabilityFindManyArgs)
  async findAvailabilities(
    @common.Req() request: Request,
    @common.Param() params: CounselorWhereUniqueInput
  ): Promise<Availability[]> {
    const query = plainToClass(AvailabilityFindManyArgs, request.query);
    const results = await this.service.findAvailabilities(params.id, {
      ...query,
      select: {
        counselor: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        endTime: true,
        id: true,
        startTime: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/availabilities")
  async connectAvailabilities(
    @common.Param() params: CounselorWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availabilities: {
        connect: body,
      },
    };
    await this.service.updateCounselor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/availabilities")
  async updateAvailabilities(
    @common.Param() params: CounselorWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availabilities: {
        set: body,
      },
    };
    await this.service.updateCounselor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/availabilities")
  async disconnectAvailabilities(
    @common.Param() params: CounselorWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availabilities: {
        disconnect: body,
      },
    };
    await this.service.updateCounselor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
