import { LiveUpdateUpdateManyWithoutMarketsInput } from "./LiveUpdateUpdateManyWithoutMarketsInput";
import { PriceHistoryUpdateManyWithoutMarketsInput } from "./PriceHistoryUpdateManyWithoutMarketsInput";

export type MarketUpdateInput = {
  liveUpdates?: LiveUpdateUpdateManyWithoutMarketsInput;
  location?: string | null;
  name?: string | null;
  priceHistories?: PriceHistoryUpdateManyWithoutMarketsInput;
};
