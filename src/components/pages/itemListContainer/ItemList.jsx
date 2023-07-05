import styles from "./ItemListContainer.module.css";
import Item from "../../common/Item/Item";
import { Flex, Grid } from "@chakra-ui/react";

const ItemList = ({ greeting, products }) => {
  return (
    <Flex
      className={styles.container}
      flexDirection="column"
      textAlign="center"
    >
      <h2 className={styles.title}>{greeting}</h2>
      <Grid
        autoRows={"400px"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        gap={"25px"}
        alignItems={"center"}
        alignSelf={"center"}
        justifyItems={"center"}
        templateRows={"400px"}
        paddingTop={"100px"}
      >
        {products.map((product) => {
          return <Item product={product} key={product.id} />;
        })}
      </Grid>
    </Flex>
  );
};

export default ItemList;
