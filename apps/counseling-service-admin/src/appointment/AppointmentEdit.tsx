import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { CounselorTitle } from "../counselor/CounselorTitle";
import { UserTitle } from "../user/UserTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="appointmentReason"
          multiline
          source="appointmentReason"
        />
        <SelectInput
          source="appointmentStatus"
          label="appointmentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="counselor.id"
          reference="Counselor"
          label="counselor"
        >
          <SelectInput optionText={CounselorTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
