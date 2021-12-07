import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { App } from "./App";
import "./theme/index.less";

ReactDom.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
