import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CROP_TITLE_FIELD } from "../crop/CropTitle";
import { MARKET_TITLE_FIELD } from "../market/MarketTitle";

export const LiveUpdateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Crop" source="crop.id" reference="Crop">
          <TextField source={CROP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Market" source="market.id" reference="Market">
          <TextField source={MARKET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Time" source="time" />
        <TextField label="UpdateMessage" source="updateMessage" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
