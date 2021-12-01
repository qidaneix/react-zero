import * as React from "react";
import * as ReactDom from "react-dom";
import { bar } from "./bar";
import { baz } from "./baz";
import { App } from "./App";

ReactDom.render(
  <div>
    <App content={baz} />
    hello world {bar}
  </div>,
  document.getElementById("root")
);
