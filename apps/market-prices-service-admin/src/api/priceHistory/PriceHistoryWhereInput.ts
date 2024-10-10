import { CropWhereUniqueInput } from "../crop/CropWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PriceHistoryWhereInput = {
  crop?: CropWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  market?: MarketWhereUniqueInput;
  price?: FloatNullableFilter;
};
