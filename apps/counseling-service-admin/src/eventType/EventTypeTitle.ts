import { EventType as TEventType } from "../api/eventType/EventType";

export const EVENTTYPE_TITLE_FIELD = "name";

export const EventTypeTitle = (record: TEventType): string => {
  return record.name?.toString() || String(record.id);
};
