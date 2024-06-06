import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { FoodTitle } from "../food/FoodTitle";

export const CartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="food.id" reference="Food" label="Food">
          <SelectInput optionText={FoodTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
