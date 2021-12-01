import * as React from "react";
import * as ReactDom from "react-dom";
import { bar } from "./bar";

ReactDom.render(<div>hello world {bar}</div>, document.getElementById("root"));
