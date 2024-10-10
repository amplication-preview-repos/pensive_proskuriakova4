import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CropTitle } from "../crop/CropTitle";
import { MarketTitle } from "../market/MarketTitle";

export const LiveUpdateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="crop.id" reference="Crop" label="Crop">
          <SelectInput optionText={CropTitle} />
        </ReferenceInput>
        <ReferenceInput source="market.id" reference="Market" label="Market">
          <SelectInput optionText={MarketTitle} />
        </ReferenceInput>
        <DateTimeInput label="Time" source="time" />
        <TextInput label="UpdateMessage" multiline source="updateMessage" />
      </SimpleForm>
    </Create>
  );
};
