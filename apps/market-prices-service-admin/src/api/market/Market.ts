import { LiveUpdate } from "../liveUpdate/LiveUpdate";
import { PriceHistory } from "../priceHistory/PriceHistory";

export type Market = {
  createdAt: Date;
  id: string;
  liveUpdates?: Array<LiveUpdate>;
  location: string | null;
  name: string | null;
  priceHistories?: Array<PriceHistory>;
  updatedAt: Date;
};
