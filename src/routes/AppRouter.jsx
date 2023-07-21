import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer";
import Layout from "../components/layout/Layout";
import CheckoutContainer from "../components/pages/Checkout/CheckoutContainer";
import CartContainer from "../components/pages/Cart/CartContainer";
import { simpleRoutes } from "./simpleRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {simpleRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
