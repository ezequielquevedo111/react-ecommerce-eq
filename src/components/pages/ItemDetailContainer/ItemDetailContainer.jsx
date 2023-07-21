import { useEffect, useState } from "react";
import { productosMagicos } from "../../../productsMock";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [oneProduct, setOneProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    let productFound = productosMagicos.find(
      (product) => product.id === Number(id)
    );
    const productSelected = new Promise((res) => {
      res(productFound);
    });
    productSelected.then((res) => setOneProduct(res));
  }, [id]);

  return (
    <>
      <ItemDetail oneProduct={oneProduct} />
    </>
  );
};

export default ItemDetailContainer;
