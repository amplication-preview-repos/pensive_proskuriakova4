import { StringFilter } from "../../util/StringFilter";
import { LiveUpdateListRelationFilter } from "../liveUpdate/LiveUpdateListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PriceHistoryListRelationFilter } from "../priceHistory/PriceHistoryListRelationFilter";

export type CropWhereInput = {
  id?: StringFilter;
  liveUpdates?: LiveUpdateListRelationFilter;
  name?: StringNullableFilter;
  priceHistories?: PriceHistoryListRelationFilter;
  season?: "Option1";
  typeField?: StringNullableFilter;
};
