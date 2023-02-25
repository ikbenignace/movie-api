import { IndicatorWhereInput } from "./IndicatorWhereInput";
import { IndicatorOrderByInput } from "./IndicatorOrderByInput";

export type IndicatorFindManyArgs = {
  where?: IndicatorWhereInput;
  orderBy?: Array<IndicatorOrderByInput>;
  skip?: number;
  take?: number;
};
