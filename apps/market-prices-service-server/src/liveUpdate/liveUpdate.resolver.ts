import * as graphql from "@nestjs/graphql";
import { LiveUpdateResolverBase } from "./base/liveUpdate.resolver.base";
import { LiveUpdate } from "./base/LiveUpdate";
import { LiveUpdateService } from "./liveUpdate.service";

@graphql.Resolver(() => LiveUpdate)
export class LiveUpdateResolver extends LiveUpdateResolverBase {
  constructor(protected readonly service: LiveUpdateService) {
    super(service);
  }
}
