import * as graphql from "@nestjs/graphql";
import { CounselorResolverBase } from "./base/counselor.resolver.base";
import { Counselor } from "./base/Counselor";
import { CounselorService } from "./counselor.service";

@graphql.Resolver(() => Counselor)
export class CounselorResolver extends CounselorResolverBase {
  constructor(protected readonly service: CounselorService) {
    super(service);
  }
}
