import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting={"Los productos mágicos que tanto deseas"}
            />
          }
        />
        <Route
          path="/categoryProduct/:category"
          element={<ItemListContainer />}
        />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<h1>Esta es la pagina del cart</h1>} />
      </Route>
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
