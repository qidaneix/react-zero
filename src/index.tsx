import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./theme/index.less";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
