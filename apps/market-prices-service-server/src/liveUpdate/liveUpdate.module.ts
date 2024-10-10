import { Module } from "@nestjs/common";
import { LiveUpdateModuleBase } from "./base/liveUpdate.module.base";
import { LiveUpdateService } from "./liveUpdate.service";
import { LiveUpdateController } from "./liveUpdate.controller";
import { LiveUpdateResolver } from "./liveUpdate.resolver";

@Module({
  imports: [LiveUpdateModuleBase],
  controllers: [LiveUpdateController],
  providers: [LiveUpdateService, LiveUpdateResolver],
  exports: [LiveUpdateService],
})
export class LiveUpdateModule {}
