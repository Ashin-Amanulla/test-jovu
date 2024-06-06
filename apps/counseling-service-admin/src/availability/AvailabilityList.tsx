import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COUNSELOR_TITLE_FIELD } from "../counselor/CounselorTitle";

export const AvailabilityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Availabilities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="counselor"
          source="counselor.id"
          reference="Counselor"
        >
          <TextField source={COUNSELOR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="startTime" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
