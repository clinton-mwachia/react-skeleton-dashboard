import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Register = () => {
  let emptyUser = {
    name: "",
    ID: "",
    password: "",
    shop: "",
    phone: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(emptyUser);

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...user };
    _user[`${name}`] = val;

    setUser(_user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={10} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      value={user.name}
                      onChange={(e) => onInputChange(e, "name")}
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="ID" isRequired>
                    <FormLabel>ID</FormLabel>
                    <Input
                      type="text"
                      value={user.ID}
                      onChange={(e) => onInputChange(e, "ID")}
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="phone" isRequired>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="text"
                      value={user.phone}
                      onChange={(e) => onInputChange(e, "phone")}
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="shop" isRequired>
                    <FormLabel>Shop</FormLabel>
                    <Input
                      type="text"
                      value={user.shop}
                      onChange={(e) => onInputChange(e, "shop")}
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={user.password}
                    onChange={(e) => onInputChange(e, "password")}
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <ChakraLink as={Link} to={"/login"} color={"blue.400"}>
                  Login
                </ChakraLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
