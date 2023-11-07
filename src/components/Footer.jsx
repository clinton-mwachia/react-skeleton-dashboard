import { Center, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center
      as="footer"
      borderTop="1px"
      borderTopColor={"gray.300"}
      py="2"
      alignItems="center"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      ml={{ base: 0, md: 60 }}
      bg={useColorModeValue("gray.200", "gray.700")}
    >
      &copy; {new Date().getFullYear()} React Dashboard
    </Center>
  );
};

export default Footer;
