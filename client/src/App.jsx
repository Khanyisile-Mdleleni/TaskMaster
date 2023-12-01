import React from "react";
import AppMenu from "./Components/AppMenu";
import SideMenu from "./Components/SideMenu";
import { Space } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppMenu />
      <Space className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
      </Space>
    </div>
  );
}

export default App;

