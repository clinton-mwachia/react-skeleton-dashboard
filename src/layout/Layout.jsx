import {
  Box,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";
import { Sidebar, Header, Footer, Content } from "../components/index";

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Content />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
