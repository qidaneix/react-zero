import * as React from "react";
import { Outlet } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div>
      Home is here and there
      <Outlet />
    </div>
  );
};
