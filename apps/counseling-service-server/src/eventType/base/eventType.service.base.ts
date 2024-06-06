/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, EventType as PrismaEventType } from "@prisma/client";

export class EventTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EventTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.eventType.count(args);
  }

  async eventTypes<T extends Prisma.EventTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeFindManyArgs>
  ): Promise<PrismaEventType[]> {
    return this.prisma.eventType.findMany<Prisma.EventTypeFindManyArgs>(args);
  }
  async eventType<T extends Prisma.EventTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeFindUniqueArgs>
  ): Promise<PrismaEventType | null> {
    return this.prisma.eventType.findUnique(args);
  }
  async createEventType<T extends Prisma.EventTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeCreateArgs>
  ): Promise<PrismaEventType> {
    return this.prisma.eventType.create<T>(args);
  }
  async updateEventType<T extends Prisma.EventTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeUpdateArgs>
  ): Promise<PrismaEventType> {
    return this.prisma.eventType.update<T>(args);
  }
  async deleteEventType<T extends Prisma.EventTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EventTypeDeleteArgs>
  ): Promise<PrismaEventType> {
    return this.prisma.eventType.delete(args);
  }
}