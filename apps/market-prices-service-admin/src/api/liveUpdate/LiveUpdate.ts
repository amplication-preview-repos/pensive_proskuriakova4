import { Crop } from "../crop/Crop";
import { Market } from "../market/Market";

export type LiveUpdate = {
  createdAt: Date;
  crop?: Crop | null;
  id: string;
  market?: Market | null;
  time: Date | null;
  updateMessage: string | null;
  updatedAt: Date;
};
