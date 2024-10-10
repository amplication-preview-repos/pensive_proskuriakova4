import { LiveUpdateUpdateManyWithoutCropsInput } from "./LiveUpdateUpdateManyWithoutCropsInput";
import { PriceHistoryUpdateManyWithoutCropsInput } from "./PriceHistoryUpdateManyWithoutCropsInput";

export type CropUpdateInput = {
  liveUpdates?: LiveUpdateUpdateManyWithoutCropsInput;
  name?: string | null;
  priceHistories?: PriceHistoryUpdateManyWithoutCropsInput;
  season?: "Option1" | null;
  typeField?: string | null;
};
