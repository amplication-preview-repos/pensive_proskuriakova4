import { LiveUpdateCreateNestedManyWithoutMarketsInput } from "./LiveUpdateCreateNestedManyWithoutMarketsInput";
import { PriceHistoryCreateNestedManyWithoutMarketsInput } from "./PriceHistoryCreateNestedManyWithoutMarketsInput";

export type MarketCreateInput = {
  liveUpdates?: LiveUpdateCreateNestedManyWithoutMarketsInput;
  location?: string | null;
  name?: string | null;
  priceHistories?: PriceHistoryCreateNestedManyWithoutMarketsInput;
};
