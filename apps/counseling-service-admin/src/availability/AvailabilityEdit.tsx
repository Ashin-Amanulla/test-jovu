import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CounselorTitle } from "../counselor/CounselorTitle";

export const AvailabilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="counselor.id"
          reference="Counselor"
          label="counselor"
        >
          <SelectInput optionText={CounselorTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
