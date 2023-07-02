import ItemList from "./ItemList";
import { productosMagicos } from "../../../productsMock";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const [saveProducts, setSaveProducts] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosMagicos);
      }, 2000);
    });

    getData
      .then((res) => {
        setSaveProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <ItemList greeting={greeting} products={saveProducts}></ItemList>;
};

export default ItemListContainer;
