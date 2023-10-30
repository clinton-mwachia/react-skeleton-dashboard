import {
  Flex,
  useColorModeValue,
  IconButton,
  Text,
  HStack,
  Button,
  MenuItem,
  useColorMode,
  MenuList,
  MenuDivider,
  Link as ChakraLink,
  Menu,
  MenuButton,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { FiBell, FiMenu, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const Header = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      borderBottom={"1px"}
      borderBottomColor={"gray.300"}
      height="20"
      alignItems="center"
      sx={{ position: "sticky", top: "0" }}
      zIndex="10"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      bg={useColorModeValue("gray.200", "gray.700")}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Dashboard
      </Text>

      <HStack spacing={{ base: "0", md: "2" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="home"
          icon={<FiHome />}
        />
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <VStack alignItems="flex-start" spacing="2px" ml="1">
                  <Text fontSize="sm" mr={"3"}>
                    name
                  </Text>
                  <Badge colorScheme="green">Badge</Badge>
                </VStack>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <ChakraLink
                as={Link}
                to={"/profile"}
                _hover={{ textDecoration: "none" }}
              >
                <MenuItem>Profile</MenuItem>
              </ChakraLink>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

Header.propTypes = {
  onOpen: PropTypes.func,
};
export default Header;
