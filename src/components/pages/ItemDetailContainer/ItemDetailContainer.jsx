import { useContext, useEffect, useState } from "react";
import { productosMagicos } from "../../../productsMock";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import { CartGlobalContext } from "../../../context/CartGlobalContext";

const ItemDetailContainer = () => {
  const [oneProduct, setOneProduct] = useState({});
  const { id } = useParams();
  const { addProductCart } = useContext(CartGlobalContext);

  useEffect(() => {
    let productFound = productosMagicos.find(
      (product) => product.id === Number(id)
    );
    const productSelected = new Promise((res) => {
      res(productFound);
    });
    productSelected.then((res) => setOneProduct(res));
  }, [id]);

  const addProduct = (cantidad) => {
    let productSavedCart = { ...oneProduct, quantity: cantidad };
    addProductCart(productSavedCart);
  };

  return (
    <>
      <ItemDetail oneProduct={oneProduct} addProduct={addProduct} />
    </>
  );
};

export default ItemDetailContainer;
