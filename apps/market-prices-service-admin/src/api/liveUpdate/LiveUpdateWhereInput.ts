import { CropWhereUniqueInput } from "../crop/CropWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LiveUpdateWhereInput = {
  crop?: CropWhereUniqueInput;
  id?: StringFilter;
  market?: MarketWhereUniqueInput;
  time?: DateTimeNullableFilter;
  updateMessage?: StringNullableFilter;
};
