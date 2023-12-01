import React from "react";
import AppMenu from "./Components/AppMenu";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
import { Space } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppMenu />
      <Space className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
    </div>
  );
}

export default App;

