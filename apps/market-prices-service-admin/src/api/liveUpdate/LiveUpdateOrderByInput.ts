import { SortOrder } from "../../util/SortOrder";

export type LiveUpdateOrderByInput = {
  createdAt?: SortOrder;
  cropId?: SortOrder;
  id?: SortOrder;
  marketId?: SortOrder;
  time?: SortOrder;
  updateMessage?: SortOrder;
  updatedAt?: SortOrder;
};
