import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { FoodTitle } from "../food/FoodTitle";

export const CartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="food.id" reference="Food" label="Food">
          <SelectInput optionText={FoodTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
