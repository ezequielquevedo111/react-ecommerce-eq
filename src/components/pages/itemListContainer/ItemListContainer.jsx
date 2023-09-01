import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting = "PRODUCTOS MÁGICOS" }) => {
  const [saveProducts, setSaveProducts] = useState([]);
  const { category } = useParams();

  /*ITEM LIST O HOME CON FILTRADO SEGUN CATEGORIA*/
  useEffect(() => {
    let productsRefComplete = collection(database, "magicProducts");
    let productRequest;
    if (category !== undefined) {
      productRequest = query(
        productsRefComplete,
        where("category", "==", category)
      );
    } else {
      productRequest = productsRefComplete;
    }
    getDocs(productRequest).then((res) => {
      let productsArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setSaveProducts(productsArray);
    });
  }, [category]);

  return (
    <ItemList greeting={greeting} products={saveProducts} category={category} />
  );
};

export default ItemListContainer;
