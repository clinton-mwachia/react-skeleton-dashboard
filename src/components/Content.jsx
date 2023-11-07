import { Box, useColorModeValue, Center, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../routes";

const Loading = () => {
  return (
    <Center h="100vh">
      <Center w="100%">
        <Spinner size="xl" color="blue.500" />
      </Center>
    </Center>
  );
};

const Content = () => {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Content;
