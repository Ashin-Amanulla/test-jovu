import { Module } from "@nestjs/common";
import { LiveUpdatesModuleBase } from "./base/liveUpdates.module.base";
import { LiveUpdatesService } from "./liveUpdates.service";
import { LiveUpdatesController } from "./liveUpdates.controller";
import { LiveUpdatesResolver } from "./liveUpdates.resolver";

@Module({
  imports: [LiveUpdatesModuleBase],
  controllers: [LiveUpdatesController],
  providers: [LiveUpdatesService, LiveUpdatesResolver],
  exports: [LiveUpdatesService],
})
export class LiveUpdatesModule {}
