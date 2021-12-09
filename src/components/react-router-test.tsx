import { Link, Routes, Route } from "react-router-dom";
import * as React from "react";
import { About } from "./about";
import { Home } from "./home";
import { Topics } from "./topics";
import { Invoice } from "./invoice";

export const ReactRouterTest: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="topics" element={<Topics />}>
            <Route index element={<div>Topics Index</div>} />
            <Route path="invoices/:id" element={<Invoice />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
};
