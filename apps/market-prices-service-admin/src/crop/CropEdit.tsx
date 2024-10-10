import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { LiveUpdateTitle } from "../liveUpdate/LiveUpdateTitle";
import { PriceHistoryTitle } from "../priceHistory/PriceHistoryTitle";

export const CropEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="liveUpdates" reference="LiveUpdate">
          <SelectArrayInput
            optionText={LiveUpdateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="priceHistories" reference="PriceHistory">
          <SelectArrayInput
            optionText={PriceHistoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="season"
          label="Season"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
