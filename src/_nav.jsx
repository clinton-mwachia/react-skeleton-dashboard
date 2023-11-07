import { FiHome, FiLayout, FiBox } from "react-icons/fi";

const _nav = [
  {
    name: "Dashboard",
    icon: FiHome,
    to: "/dashboard",
  },
  {
    name: "Layout",
    icon: FiLayout,
    items: [
      {
        name: "Box",
        to: "/box",
        icon: FiBox,
      },
      {
        name: "Test 2",
        to: "/test2",
        icon: FiHome,
      },
    ],
  },
];

export default _nav;
