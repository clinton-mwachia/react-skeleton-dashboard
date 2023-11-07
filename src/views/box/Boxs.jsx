import {
  Box,
  Avatar,
  Stack,
  HStack,
  Circle,
  Square,
  Center,
} from "@chakra-ui/react";
import { PhoneIcon, SettingsIcon, LinkIcon } from "@chakra-ui/icons";

const Boxs = () => {
  return (
    <Box p={2}>
      <Stack direction={["column", "row"]}>
        <Box
          w={{ md: "40%", sm: "100%" }}
          p={4}
          borderRadius={"sm"}
          borderWidth={"1px"}
          boxShadow={"lg"}
        >
          <Box textAlign={"center"}>
            <Avatar name="First Name" size="lg" />
          </Box>
          <Center mt={3}>
            <HStack>
              <Circle size="40px" bg="tomato" color="white">
                <PhoneIcon />
              </Circle>
              <Square size="40px" bg="teal" color="white">
                <SettingsIcon />
              </Square>
              <Circle size="40px" bg="tomato" color="white">
                <LinkIcon />
              </Circle>
            </HStack>
          </Center>
        </Box>
        <Box
          w={{ md: "80%", sm: "100%" }}
          p={3}
          borderRadius={"sm"}
          borderWidth={"1px"}
          boxShadow={"lg"}
        >
          <Center>Some content</Center>
        </Box>
        <Box
          w={{ md: "80%", sm: "100%" }}
          p={3}
          borderRadius={"sm"}
          borderWidth={"1px"}
          boxShadow={"lg"}
        >
          <Center>Some content</Center>
        </Box>
      </Stack>
      <Stack direction={["column", "row"]} mt={3}>
        <Box
          w={{ md: "20%", sm: "100%" }}
          p={4}
          borderRadius={"sm"}
          borderWidth={"1px"}
          boxShadow={"lg"}
        >
          <Box textAlign={"center"}>
            <Center>More content2</Center>
          </Box>
        </Box>
        <Box
          w={{ md: "80%", sm: "100%" }}
          p={3}
          borderRadius={"sm"}
          borderWidth={"1px"}
          boxShadow={"lg"}
        >
          <Center>Some content</Center>
        </Box>
      </Stack>
    </Box>
  );
};

export default Boxs;
