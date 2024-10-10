import { LiveUpdate as TLiveUpdate } from "../api/liveUpdate/LiveUpdate";

export const LIVEUPDATE_TITLE_FIELD = "id";

export const LiveUpdateTitle = (record: TLiveUpdate): string => {
  return record.id?.toString() || String(record.id);
};
