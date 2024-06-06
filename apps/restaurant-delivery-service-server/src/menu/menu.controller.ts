import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MenuService } from "./menu.service";
import { MenuControllerBase } from "./base/menu.controller.base";

@swagger.ApiTags("menus")
@common.Controller("menus")
export class MenuController extends MenuControllerBase {
  constructor(protected readonly service: MenuService) {
    super(service);
  }
}
