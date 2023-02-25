import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IndicatorServiceBase } from "./base/indicator.service.base";

@Injectable()
export class IndicatorService extends IndicatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
