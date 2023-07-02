import { Box, Grid } from "@mui/material";
import Footer from "./components/layout/Footer/Footer";
import NavBar from "./components/layout/NavBar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <Box>
      <Grid>
        <NavBar />
        <ItemListContainer
          greeting={"Tu destino para los productos magicos que tanto deseas"}
        />
        <Footer />
      </Grid>
    </Box>
  );
}

export default App;
