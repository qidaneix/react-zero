import * as React from "react";
import * as ReactDom from "react-dom";
import { bar } from "./bar";
import { baz } from "./baz";
import { App } from "./App";
import styles from "./index.scss";

ReactDom.render(
  <div className={styles.error}>
    <App content={baz} />
    hello world {bar}
  </div>,
  document.getElementById("root")
);
