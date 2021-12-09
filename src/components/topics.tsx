import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "./data";
import * as styles from "./topics.scss";

export const Topics: React.FC = () => {
  return (
    <div className={styles.wrap}>
      Topics
      <nav className={styles.nav}>
        {getInvoices().map((invoice) => (
          <NavLink
            className={styles.link}
            style={({ isActive }) => ({
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            })}
            to={`/topics/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};
