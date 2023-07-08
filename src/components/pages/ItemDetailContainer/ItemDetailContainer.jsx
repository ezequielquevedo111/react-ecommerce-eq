import { useEffect, useState } from "react";
import { productosMagicos } from "../../../productsMock";

import Item from "../../common/Item/Item";

const ItemDetailContainer = () => {
  const [oneProduct, setOneProduct] = useState([]);
  let id = 2;
  useEffect(() => {
    let productFound = productosMagicos.find((product) => product.id === id);
    console.log(productFound);
    const productSelected = new Promise((res, rej) => {
      res(productFound);
    });
    productSelected.then((res) => setOneProduct([res]));
  }, []);
  console.log(oneProduct);

  return (
    <div>
      {oneProduct.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
