/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
const Component = lazy(() => import("./views/component/Component"));
const Component2 = lazy(() => import("./views/component2/Component2"));
const Profile = lazy(() => import("./pages/profile/Profile"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/component", name: "Box", element: Component },
  { path: "/component2", name: "Test2", element: Component2 },
  { path: "/Profile", name: "Profile", element: Profile },
];

export default routes;
