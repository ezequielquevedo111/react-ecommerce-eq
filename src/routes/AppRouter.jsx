import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer";
import Layout from "../components/layout/Layout";
import CheckoutContainer from "../components/pages/Checkout/CheckoutContainer";
import CartContainer from "../components/pages/Cart/CartContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<ItemListContainer greeting={"Productos mágicos"} />}
        />
        <Route
          path="/categoryProduct/:category"
          element={<ItemListContainer />}
        />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
      </Route>
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
