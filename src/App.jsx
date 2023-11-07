import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Spinner, Center } from "@chakra-ui/react";

const Layout = lazy(() => import("./layout/Layout"));

// loading spinner
const Loading = () => {
  return (
    <Center h="100vh">
      <Center w="100%">
        <Spinner size="xl" color="blue.500" />
      </Center>
    </Center>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="*" element={<Layout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
