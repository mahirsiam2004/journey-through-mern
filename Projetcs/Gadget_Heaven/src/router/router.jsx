import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import layout from "../layout/layout";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: layout,
    children: [
      {
        index:true,
        Component: Home
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/statistics ",
        Component: Statistics,
      },
    ],
  },
]);
