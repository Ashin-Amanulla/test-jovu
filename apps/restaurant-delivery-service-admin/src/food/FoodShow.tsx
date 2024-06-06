import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FOOD_TITLE_FIELD } from "./FoodTitle";

export const FoodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isAvailable" source="isAvailable" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Cart" target="foodId" label="Carts">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Food" source="food.id" reference="Food">
              <TextField source={FOOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="User" source="user" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="foodId" label="Orders">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Food" source="food.id" reference="Food">
              <TextField source={FOOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <TextField label="totalAmount" source="totalAmount" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="User" source="user" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Review" target="foodId" label="Reviews">
          <Datagrid rowClick="show">
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Food" source="food.id" reference="Food">
              <TextField source={FOOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="User" source="user" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
