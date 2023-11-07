/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
const Boxs = lazy(() => import("./views/box/Boxs"));
const Test2 = lazy(() => import("./views/test2/Test2"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/box", name: "Box", element: Boxs },
  { path: "/test2", name: "Test2", element: Test2 },
];

export default routes;
