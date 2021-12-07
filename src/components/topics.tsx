import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "./data";
import * as styles from "./topics.scss";

export const Topics: React.FC = () => {
  return (
    <div className={styles.wrap}>
      Topics
      <nav className={styles.nav}>
        {getInvoices().map((invoice) => (
          <Link
            className={styles.link}
            to={`/topics/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};
