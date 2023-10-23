import { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./layout/Layout"));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<>lOADING...</>}>
        <Routes>
          <Route exact path="*" element={<Layout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
