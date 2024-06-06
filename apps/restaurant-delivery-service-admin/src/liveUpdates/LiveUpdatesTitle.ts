import { LiveUpdates as TLiveUpdates } from "../api/liveUpdates/LiveUpdates";

export const LIVEUPDATES_TITLE_FIELD = "currentLocation";

export const LiveUpdatesTitle = (record: TLiveUpdates): string => {
  return record.currentLocation?.toString() || String(record.id);
};
