import { CropWhereUniqueInput } from "../crop/CropWhereUniqueInput";
import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";

export type LiveUpdateUpdateInput = {
  crop?: CropWhereUniqueInput | null;
  market?: MarketWhereUniqueInput | null;
  time?: Date | null;
  updateMessage?: string | null;
};
