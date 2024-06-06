import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FoodTitle } from "../food/FoodTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput source="food.id" reference="Food" label="Food">
          <SelectInput optionText={FoodTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
