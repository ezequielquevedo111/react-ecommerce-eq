import { Box } from "@mui/material";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box>
      <h2 className={styles.title}>{greeting}</h2>
    </Box>
  );
};

export default ItemListContainer;
