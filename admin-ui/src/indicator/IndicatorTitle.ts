import { Indicator as TIndicator } from "../api/indicator/Indicator";

export const INDICATOR_TITLE_FIELD = "id";

export const IndicatorTitle = (record: TIndicator): string => {
  return record.id || String(record.id);
};
