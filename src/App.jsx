import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/AppRouter";
import CartGlobalContextProvider from "./context/CartGlobalContext";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <CartGlobalContextProvider>
          <AppRouter />
        </CartGlobalContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
