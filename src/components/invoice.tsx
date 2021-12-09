import * as React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "./data";

export function Invoice() {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.id, 10));

  return (
    <>
      <h2>Invoice # {params.id}</h2>
      <div>{invoice.number}</div>
      <div>{invoice.name}</div>
      <div>{invoice.due}</div>
      <div>{invoice.amount}</div>
    </>
  );
}
