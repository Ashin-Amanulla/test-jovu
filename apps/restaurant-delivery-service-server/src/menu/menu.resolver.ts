import * as graphql from "@nestjs/graphql";
import { MenuResolverBase } from "./base/menu.resolver.base";
import { Menu } from "./base/Menu";
import { MenuService } from "./menu.service";

@graphql.Resolver(() => Menu)
export class MenuResolver extends MenuResolverBase {
  constructor(protected readonly service: MenuService) {
    super(service);
  }
}
