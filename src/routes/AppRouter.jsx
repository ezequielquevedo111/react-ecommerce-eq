import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { simpleRoutes } from "../../src/routes/SimpleRoutes/SimpleRoutes";
import SaveErrorPage from "./SaveErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {simpleRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<SaveErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
