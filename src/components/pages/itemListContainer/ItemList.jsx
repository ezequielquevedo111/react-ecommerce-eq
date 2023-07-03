import styles from "./ItemListContainer.module.css";
import ItemContainer from "../../common/Item/ItemContainer";
import { Flex } from "@chakra-ui/react";

const ItemList = ({ greeting, products }) => {
  return (
    <Flex
      className={styles.container}
      flexDirection="column"
      textAlign="center"
    >
      <h2 className={styles.title}>{greeting}</h2>
      <ItemContainer products={products} />
    </Flex>
  );
};

export default ItemList;
