import { useContext, useEffect, useState } from "react";
// import { productosMagicos } from "../../../productsMock";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import { toast } from "react-hot-toast";
import { collection, getDoc, doc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const [oneProduct, setOneProduct] = useState({});
  const { id } = useParams();
  const { addProductCart, getQuantityFromId } = useContext(CartGlobalContext);
  const totalQuantityProduct = getQuantityFromId(id);

  /*ITEM DETAIL CON ESTADO GLOBAL Y EL FILTRO SEGUN EL ID*/
  useEffect(() => {
    let productsRef = collection(database, "magicProducts");
    let productByRef = doc(productsRef, id);
    getDoc(productByRef).then((res) => {
      setOneProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  const addProduct = (cantidad) => {
    let productSavedCart = { ...oneProduct, quantity: cantidad };
    addProductCart(productSavedCart);
    toast.success("Producto añadido al carrito.");
  };

  return (
    <>
      <ItemDetail
        oneProduct={oneProduct}
        addProduct={addProduct}
        totalQuantityProduct={totalQuantityProduct}
      />
    </>
  );
};

export default ItemDetailContainer;
