import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";

// Realizar enrutado home, carrito de compra, ruta de detail, del checkout.
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/*Ruta principal */}
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greeting={"Los productos mágicos que tanto deseas"}
                />
              }
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route
              path="/categoryProduct/:category"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<h1>Esta es la pagina del cart</h1>} />
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
