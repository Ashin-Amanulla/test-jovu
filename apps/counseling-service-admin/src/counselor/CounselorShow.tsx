import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COUNSELOR_TITLE_FIELD } from "./CounselorTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CounselorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="availableTimeSlots" source="availableTimeSlots" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="specialization" source="specialization" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointment"
          target="counselorId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <TextField label="appointmentReason" source="appointmentReason" />
            <TextField label="appointmentStatus" source="appointmentStatus" />
            <ReferenceField
              label="counselor"
              source="counselor.id"
              reference="Counselor"
            >
              <TextField source={COUNSELOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Availability"
          target="counselorId"
          label="Availabilities"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
