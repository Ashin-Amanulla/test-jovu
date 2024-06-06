import * as graphql from "@nestjs/graphql";
import { FoodResolverBase } from "./base/food.resolver.base";
import { Food } from "./base/Food";
import { FoodService } from "./food.service";

@graphql.Resolver(() => Food)
export class FoodResolver extends FoodResolverBase {
  constructor(protected readonly service: FoodService) {
    super(service);
  }
}
