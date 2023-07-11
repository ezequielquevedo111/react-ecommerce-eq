import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productosMagicos } from "../../../productsMock";
const ItemListContainer = ({ greeting }) => {
  const [saveProducts, setSaveProducts] = useState([]);

  const { category } = useParams();
  useEffect(() => {
    let productsCategoryFound = productosMagicos.filter(
      (product) => product.category === category
    );
    const getMagicProducts = new Promise((res) => {
      setTimeout(() => {
        res(category === undefined ? productosMagicos : productsCategoryFound);
      }, 1000);
    });
    getMagicProducts
      .then((res) => {
        setSaveProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return <ItemList greeting={greeting} products={saveProducts}></ItemList>;
};

export default ItemListContainer;
