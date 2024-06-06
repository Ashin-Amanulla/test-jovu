import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiveUpdatesServiceBase } from "./base/liveUpdates.service.base";

@Injectable()
export class LiveUpdatesService extends LiveUpdatesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
