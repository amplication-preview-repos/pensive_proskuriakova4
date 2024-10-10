import { StringFilter } from "../../util/StringFilter";
import { LiveUpdateListRelationFilter } from "../liveUpdate/LiveUpdateListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PriceHistoryListRelationFilter } from "../priceHistory/PriceHistoryListRelationFilter";

export type MarketWhereInput = {
  id?: StringFilter;
  liveUpdates?: LiveUpdateListRelationFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  priceHistories?: PriceHistoryListRelationFilter;
};
