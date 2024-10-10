import { CropWhereUniqueInput } from "../crop/CropWhereUniqueInput";
import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";

export type PriceHistoryCreateInput = {
  crop?: CropWhereUniqueInput | null;
  date?: Date | null;
  market?: MarketWhereUniqueInput | null;
  price?: number | null;
};
