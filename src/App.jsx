import { Box, Grid } from "@mui/material";
import Footer from "./components/layout/Footer/Footer";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <Box>
      <Grid>
        <NavBar />
        <Home />
        <Footer />
      </Grid>
    </Box>
  );
}

export default App;
