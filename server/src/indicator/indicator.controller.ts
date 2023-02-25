import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IndicatorService } from "./indicator.service";
import { IndicatorControllerBase } from "./base/indicator.controller.base";

@swagger.ApiTags("indicators")
@common.Controller("indicators")
export class IndicatorController extends IndicatorControllerBase {
  constructor(
    protected readonly service: IndicatorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
