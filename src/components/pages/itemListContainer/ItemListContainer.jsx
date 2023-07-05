import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getMagicProducts } from "../../../utils/AsyncMock/AsyncMock";
const ItemListContainer = ({ greeting }) => {
  const [saveProducts, setSaveProducts] = useState([]);
  useEffect(() => {
    getMagicProducts
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
