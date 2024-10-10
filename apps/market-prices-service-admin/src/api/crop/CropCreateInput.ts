import { LiveUpdateCreateNestedManyWithoutCropsInput } from "./LiveUpdateCreateNestedManyWithoutCropsInput";
import { PriceHistoryCreateNestedManyWithoutCropsInput } from "./PriceHistoryCreateNestedManyWithoutCropsInput";

export type CropCreateInput = {
  liveUpdates?: LiveUpdateCreateNestedManyWithoutCropsInput;
  name?: string | null;
  priceHistories?: PriceHistoryCreateNestedManyWithoutCropsInput;
  season?: "Option1" | null;
  typeField?: string | null;
};
