import * as React from "react";

export function Invoice() {
  const pathname = window.location.pathname;
  return (
    <h2>
      Invoice #???
      <div>{pathname}</div>
    </h2>
  );
}
