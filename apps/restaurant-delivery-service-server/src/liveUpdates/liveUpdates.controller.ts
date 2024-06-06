import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LiveUpdatesService } from "./liveUpdates.service";
import { LiveUpdatesControllerBase } from "./base/liveUpdates.controller.base";

@swagger.ApiTags("liveUpdates")
@common.Controller("liveUpdates")
export class LiveUpdatesController extends LiveUpdatesControllerBase {
  constructor(protected readonly service: LiveUpdatesService) {
    super(service);
  }
}
