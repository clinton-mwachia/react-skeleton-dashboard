/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
const Test1 = lazy(() => import("./views/test1/Test1"));
const Test2 = lazy(() => import("./views/test2/Test2"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/test1", name: "Test1", element: Test1 },
  { path: "/test2", name: "Test2", element: Test2 },
];

export default routes;
