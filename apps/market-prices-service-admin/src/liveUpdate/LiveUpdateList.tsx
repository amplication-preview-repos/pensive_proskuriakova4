import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CROP_TITLE_FIELD } from "../crop/CropTitle";
import { MARKET_TITLE_FIELD } from "../market/MarketTitle";

export const LiveUpdateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"LiveUpdates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
