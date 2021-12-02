import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { bar } from "./bar";
import { baz } from "./baz";
import { App } from "./App";

ReactDom.render(
  <BrowserRouter>
    <App content={baz + bar} />
  </BrowserRouter>,
  document.getElementById("root")
);
