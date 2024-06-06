import * as graphql from "@nestjs/graphql";
import { LiveUpdatesResolverBase } from "./base/liveUpdates.resolver.base";
import { LiveUpdates } from "./base/LiveUpdates";
import { LiveUpdatesService } from "./liveUpdates.service";

@graphql.Resolver(() => LiveUpdates)
export class LiveUpdatesResolver extends LiveUpdatesResolverBase {
  constructor(protected readonly service: LiveUpdatesService) {
    super(service);
  }
}
