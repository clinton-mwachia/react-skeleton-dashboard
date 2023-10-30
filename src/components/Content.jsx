import { Box, useColorModeValue } from "@chakra-ui/react";

const Content = () => {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      Content
    </Box>
  );
};

export default Content;
