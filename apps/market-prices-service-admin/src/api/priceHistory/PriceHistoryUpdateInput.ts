import { CropWhereUniqueInput } from "../crop/CropWhereUniqueInput";
import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";

export type PriceHistoryUpdateInput = {
  crop?: CropWhereUniqueInput | null;
  date?: Date | null;
  market?: MarketWhereUniqueInput | null;
  price?: number | null;
};
