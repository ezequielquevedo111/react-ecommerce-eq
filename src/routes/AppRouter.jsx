import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SaveErrorPage from "./SaveErrorPage";
import { rutasSeparadas } from "./RutasSeparadas/rutasSeparadas";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {rutasSeparadas.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<SaveErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
