import { Box } from "@mui/material";
import styles from "./ItemListContainer.module.css";
import CounterContainer from "../../common/counter/CounterContainer";
import ItemContainer from "../../common/Item/ItemContainer";

const ItemList = ({ greeting }) => {
  return (
    <Box className={styles.container}>
      <h2 className={styles.title}>{greeting}</h2>
      <ItemContainer />
      <CounterContainer />
    </Box>
  );
};

export default ItemList;
