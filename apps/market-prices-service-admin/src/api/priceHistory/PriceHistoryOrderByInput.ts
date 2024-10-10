import { SortOrder } from "../../util/SortOrder";

export type PriceHistoryOrderByInput = {
  createdAt?: SortOrder;
  cropId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  marketId?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
