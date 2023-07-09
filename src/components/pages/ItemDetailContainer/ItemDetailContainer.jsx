import { useEffect, useState } from "react";
import { productosMagicos } from "../../../productsMock";
import Item from "../../common/Item/Item";
import { useParams } from "react-router-dom";

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
    <div>
      {oneProduct.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
