import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text,
  Button,
  Heading,
  useColorModeValue,
  InputGroup,
  Link as ChakraLink,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emptyUser = {
    username: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(emptyUser);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...user };
    _user[`${name}`] = val;

    setUser(_user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    console.log(user);
    navigate("/");
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
          <Heading fontSize={"4xl"}>Sign into your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {login ? (
              <Center>
                <Spinner />
              </Center>
            ) : null}
            <form onSubmit={handleSubmit}>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="username"
                  value={user.username}
                  onChange={(e) => onInputChange(e, "username")}
                  placeholder="username"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </FormControl>
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
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  type="submit"
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  No Account?{" "}
                  <ChakraLink as={Link} to={"/register"} color={"blue.400"}>
                    Register
                  </ChakraLink>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
