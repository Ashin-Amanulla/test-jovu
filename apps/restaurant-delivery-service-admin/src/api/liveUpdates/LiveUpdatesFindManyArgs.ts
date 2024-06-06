import { LiveUpdatesWhereInput } from "./LiveUpdatesWhereInput";
import { LiveUpdatesOrderByInput } from "./LiveUpdatesOrderByInput";

export type LiveUpdatesFindManyArgs = {
  where?: LiveUpdatesWhereInput;
  orderBy?: Array<LiveUpdatesOrderByInput>;
  skip?: number;
  take?: number;
};
