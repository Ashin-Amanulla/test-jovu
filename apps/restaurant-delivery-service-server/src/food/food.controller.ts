import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FoodService } from "./food.service";
import { FoodControllerBase } from "./base/food.controller.base";

@swagger.ApiTags("foods")
@common.Controller("foods")
export class FoodController extends FoodControllerBase {
  constructor(protected readonly service: FoodService) {
    super(service);
  }
}
