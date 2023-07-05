import Footer from "./components/layout/Footer/Footer";
import Layout from "./components/layout/Layout";
import NavBar from "./components/layout/NavBar/NavBar";
// import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Realizar enrutado home, carrito de compra, ruta de detail, del checkout.
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/*Ruta principal */}
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            {/*Ruta personalizada */}
            <Route path="/carrito" element={<h1>Este es el home</h1>} />
          </Route>
          {/*Ruta para poner por defecto en el caso que no lo encuentre */}
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
