import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./index.scss";

export function App(props) {
  return (
    <div className={styles.error}>
      {props.content}
      <nav>
        <Link to="/game">游戏</Link>
        &nbsp;
        <Link to="/function">功能</Link>
      </nav>
    </div>
  );
}
