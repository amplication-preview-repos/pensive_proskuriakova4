import { Crop } from "../crop/Crop";
import { Market } from "../market/Market";

export type PriceHistory = {
  createdAt: Date;
  crop?: Crop | null;
  date: Date | null;
  id: string;
  market?: Market | null;
  price: number | null;
  updatedAt: Date;
};
