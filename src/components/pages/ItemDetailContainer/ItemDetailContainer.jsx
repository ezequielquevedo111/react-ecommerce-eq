import { useEffect, useState } from "react";
import { productosMagicos } from "../../../productsMock";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [oneProduct, setOneProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let productFound = productosMagicos.find(
      (product) => product.id === Number(id)
    );
    const productSelected = new Promise((res) => {
      res(productFound);
    });
    productSelected.then((res) => setOneProduct([res]));
  }, [id]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      h="800px"
      backgroundColor={"#0e1428"}
      justifyItems="center"
      alignItems="center"
      p="20px"
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
        return (
          <ItemDetail product={product} key={product.id} showContent={true} />
        );
      })}
    </Box>
  );
};

export default ItemDetailContainer;
