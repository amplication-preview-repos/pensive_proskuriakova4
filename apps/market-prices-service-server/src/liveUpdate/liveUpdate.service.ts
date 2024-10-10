import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiveUpdateServiceBase } from "./base/liveUpdate.service.base";

@Injectable()
export class LiveUpdateService extends LiveUpdateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
