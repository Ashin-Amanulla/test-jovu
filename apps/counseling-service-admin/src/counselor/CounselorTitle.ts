import { Counselor as TCounselor } from "../api/counselor/Counselor";

export const COUNSELOR_TITLE_FIELD = "specialization";

export const CounselorTitle = (record: TCounselor): string => {
  return record.specialization?.toString() || String(record.id);
};
