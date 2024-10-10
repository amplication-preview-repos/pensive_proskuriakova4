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

export const PriceHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PriceHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Crop" source="crop.id" reference="Crop">
          <TextField source={CROP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Market" source="market.id" reference="Market">
          <TextField source={MARKET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
