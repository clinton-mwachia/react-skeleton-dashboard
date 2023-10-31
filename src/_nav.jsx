import { FiHome } from "react-icons/fi";

const _nav = [
  {
    name: "Dashboard",
    icon: FiHome,
    to: "/dashboard",
  },
  {
    name: "test",
    icon: FiHome,
    to: "/test",
    items: [
      {
        name: "Test 1",
        to: "/test1",
        icon: FiHome,
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
