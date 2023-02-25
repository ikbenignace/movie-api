import { Module } from "@nestjs/common";
import { IndicatorModuleBase } from "./base/indicator.module.base";
import { IndicatorService } from "./indicator.service";
import { IndicatorController } from "./indicator.controller";
import { IndicatorResolver } from "./indicator.resolver";

@Module({
  imports: [IndicatorModuleBase],
  controllers: [IndicatorController],
  providers: [IndicatorService, IndicatorResolver],
  exports: [IndicatorService],
})
export class IndicatorModule {}
