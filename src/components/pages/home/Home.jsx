import { Box, Grid } from "@mui/material";
import styles from "./Home.module.css";
import ItemListContainer from "../itemListContainer/ItemListContainer";

const Home = () => {
  return (
    <Box className={styles.container}>
      <Grid>
        <h1>Las Tres Escobas</h1> <br />
        <ItemListContainer
          greeting={"Tu destino para los productos mágicos que tanto deseas"}
        />
      </Grid>
    </Box>
  );
};

export default Home;
