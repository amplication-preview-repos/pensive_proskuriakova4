import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CROP_TITLE_FIELD } from "./CropTitle";
import { MARKET_TITLE_FIELD } from "../market/MarketTitle";

export const CropShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Season" source="season" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LiveUpdate"
          target="cropId"
          label="LiveUpdates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Crop" source="crop.id" reference="Crop">
              <TextField source={CROP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Market"
              source="market.id"
              reference="Market"
            >
              <TextField source={MARKET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time" source="time" />
            <TextField label="UpdateMessage" source="updateMessage" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PriceHistory"
          target="cropId"
          label="PriceHistories"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Crop" source="crop.id" reference="Crop">
              <TextField source={CROP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Market"
              source="market.id"
              reference="Market"
            >
              <TextField source={MARKET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
