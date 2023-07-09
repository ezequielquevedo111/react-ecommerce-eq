import { useEffect, useState } from "react";
import { productosMagicos } from "../../../productsMock";
import Item from "../../common/Item/Item";
import { useParams } from "react-router-dom";
import { Grid, Heading } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [oneProduct, setOneProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let productFound = productosMagicos.find(
      (product) => product.id === Number(id)
    );
    console.log(productFound);
    const productSelected = new Promise((res, rej) => {
      res(productFound);
    });
    productSelected.then((res) => setOneProduct([res]));
  }, [id]);

  return (
    <Grid>
      <Heading fontFamily={"Playfair Display SC"} color={"#c68e01"} size="2xl">
        Producto mágico
      </Heading>
      {oneProduct.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </Grid>
  );
};

export default ItemDetailContainer;
