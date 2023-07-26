import { useContext } from "react";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cartProduct, deleteProductCart } = useContext(CartGlobalContext);
  return (
    <Cart cartProduct={cartProduct} deleteProductCart={deleteProductCart} />
  );
};

export default CartContainer;
