import { LiveUpdate } from "../liveUpdate/LiveUpdate";
import { PriceHistory } from "../priceHistory/PriceHistory";

export type Crop = {
  createdAt: Date;
  id: string;
  liveUpdates?: Array<LiveUpdate>;
  name: string | null;
  priceHistories?: Array<PriceHistory>;
  season?: "Option1" | null;
  typeField: string | null;
  updatedAt: Date;
};
