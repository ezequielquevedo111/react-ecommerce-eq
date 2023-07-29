import { useContext, useEffect, useState } from "react";
import { productosMagicos } from "../../../productsMock";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import { toast } from "react-hot-toast";

const ItemDetailContainer = () => {
  const [oneProduct, setOneProduct] = useState({});
  const { id } = useParams();
  const { addProductCart } = useContext(CartGlobalContext);

  /*ITEM DETAIL CON ESTADO GLOBAL Y EL FILTRO SEGUN EL ID*/
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
    toast.success("Producto añadido al carrito.");
  };

  return (
    <>
      <ItemDetail oneProduct={oneProduct} addProduct={addProduct} />
    </>
  );
};

export default ItemDetailContainer;
