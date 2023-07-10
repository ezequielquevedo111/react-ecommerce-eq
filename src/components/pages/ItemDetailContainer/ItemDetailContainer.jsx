import { useEffect, useState } from "react";
import { productosMagicos } from "../../../productsMock";
import Item from "../../common/Item/Item";
import { useParams } from "react-router-dom";
import { Box, Grid, Heading } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [oneProduct, setOneProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let productFound = productosMagicos.find(
      (product) => product.id === Number(id)
    );
    const productSelected = new Promise((res, rej) => {
      res(productFound);
    });
    productSelected.then((res) => setOneProduct([res]));
  }, [id]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      backgroundColor={"#0e1428"}
      justifyItems="center"
      alignItems="center"
    >
      <Heading
        fontFamily={"Playfair Display SC"}
        color={"#c68e01"}
        size="2xl"
        paddingBottom={"70px"}
      >
        Producto mágico
      </Heading>
      {oneProduct.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </Box>
  );
};

export default ItemDetailContainer;
