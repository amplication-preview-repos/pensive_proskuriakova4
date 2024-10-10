import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CropTitle } from "../crop/CropTitle";
import { MarketTitle } from "../market/MarketTitle";

export const PriceHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="crop.id" reference="Crop" label="Crop">
          <SelectInput optionText={CropTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput source="market.id" reference="Market" label="Market">
          <SelectInput optionText={MarketTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
