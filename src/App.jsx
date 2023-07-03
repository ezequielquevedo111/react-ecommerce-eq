// import { Box, Grid } from "@mui/material";
import Footer from "./components/layout/Footer/Footer";
import NavBar from "./components/layout/NavBar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Box>
          <NavBar />
          <ItemListContainer
            greeting={"Los productos mágicos que tanto deseas"}
          />
          <Footer />
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
