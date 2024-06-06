import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CounselorService } from "./counselor.service";
import { CounselorControllerBase } from "./base/counselor.controller.base";

@swagger.ApiTags("counselors")
@common.Controller("counselors")
export class CounselorController extends CounselorControllerBase {
  constructor(protected readonly service: CounselorService) {
    super(service);
  }
}
