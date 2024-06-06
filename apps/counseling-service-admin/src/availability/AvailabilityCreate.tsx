import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CounselorTitle } from "../counselor/CounselorTitle";

export const AvailabilityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
