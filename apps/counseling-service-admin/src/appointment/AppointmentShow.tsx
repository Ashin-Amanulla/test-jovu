import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COUNSELOR_TITLE_FIELD } from "../counselor/CounselorTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
