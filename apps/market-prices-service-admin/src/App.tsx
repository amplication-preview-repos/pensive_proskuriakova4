import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CropList } from "./crop/CropList";
import { CropCreate } from "./crop/CropCreate";
import { CropEdit } from "./crop/CropEdit";
import { CropShow } from "./crop/CropShow";
import { MarketList } from "./market/MarketList";
import { MarketCreate } from "./market/MarketCreate";
import { MarketEdit } from "./market/MarketEdit";
import { MarketShow } from "./market/MarketShow";
import { LiveUpdateList } from "./liveUpdate/LiveUpdateList";
import { LiveUpdateCreate } from "./liveUpdate/LiveUpdateCreate";
import { LiveUpdateEdit } from "./liveUpdate/LiveUpdateEdit";
import { LiveUpdateShow } from "./liveUpdate/LiveUpdateShow";
import { PriceHistoryList } from "./priceHistory/PriceHistoryList";
import { PriceHistoryCreate } from "./priceHistory/PriceHistoryCreate";
import { PriceHistoryEdit } from "./priceHistory/PriceHistoryEdit";
import { PriceHistoryShow } from "./priceHistory/PriceHistoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"MarketPricesService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Crop"
          list={CropList}
          edit={CropEdit}
          create={CropCreate}
          show={CropShow}
        />
        <Resource
          name="Market"
          list={MarketList}
          edit={MarketEdit}
          create={MarketCreate}
          show={MarketShow}
        />
        <Resource
          name="LiveUpdate"
          list={LiveUpdateList}
          edit={LiveUpdateEdit}
          create={LiveUpdateCreate}
          show={LiveUpdateShow}
        />
        <Resource
          name="PriceHistory"
          list={PriceHistoryList}
          edit={PriceHistoryEdit}
          create={PriceHistoryCreate}
          show={PriceHistoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
