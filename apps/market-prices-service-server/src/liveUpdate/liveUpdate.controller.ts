import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LiveUpdateService } from "./liveUpdate.service";
import { LiveUpdateControllerBase } from "./base/liveUpdate.controller.base";

@swagger.ApiTags("liveUpdates")
@common.Controller("liveUpdates")
export class LiveUpdateController extends LiveUpdateControllerBase {
  constructor(protected readonly service: LiveUpdateService) {
    super(service);
  }
}
