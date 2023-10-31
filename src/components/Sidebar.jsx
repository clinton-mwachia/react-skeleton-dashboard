import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  List,
  Link as ChakraLink,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import React from "react";

import navigation from "../_nav";

const NavItem = ({ icon, children, to, items, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleItemClick = () => {
    if (items && items.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Box>
      <ChakraLink
        as={Link}
        to={to}
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        onClick={handleItemClick}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
          {items && (
            <Icon
              ml="auto"
              as={isOpen ? ChevronDownIcon : ChevronUpIcon}
              w={4}
              h={4}
            />
          )}
        </Flex>
      </ChakraLink>
      {isOpen && items && (
        <List pl={8}>
          {items.map((subItem) => (
            <NavItem key={subItem.name} icon={subItem.icon} to={subItem.to}>
              {subItem.name}
            </NavItem>
          ))}
        </List>
      )}
    </Box>
  );
};

const Sidebar = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Dashboard
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <List>
        {navigation.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            to={link.to}
            items={link.items}
          >
            {link.name}
          </NavItem>
        ))}
      </List>
    </Box>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
};

NavItem.propTypes = {
  icon: PropTypes.elementType,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
};

export default Sidebar;
