import { FiHome, FiLayout, FiBox } from "react-icons/fi";
import { EmailIcon } from "@chakra-ui/icons";

const _nav = [
  {
    name: "Dashboard",
    icon: FiHome,
    to: "/dashboard",
  },
  {
    name: "Layout",
    icon: FiLayout,
    to: "/component",
    items: [
      {
        name: "Component",
        to: "/component",
        icon: FiBox,
      },
      {
        name: "Component2",
        to: "/component2",
        icon: EmailIcon,
      },
    ],
  },
];

export default _nav;
