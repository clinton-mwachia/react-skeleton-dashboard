import { Box } from "@chakra-ui/react";
import { Sidebar, Header, Footer, Content } from "../components/index";

const Layout = () => {
  return (
    <Box>
      <Sidebar />
      <Content />
      <Header />
      <Footer />
    </Box>
  );
};

export default Layout;
