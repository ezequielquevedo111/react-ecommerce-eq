import { useContext } from "react";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cartProduct, deleteProductCart, getTotalAmount, deleteAllCart } =
    useContext(CartGlobalContext);
  let total = getTotalAmount();

  return (
    <Cart
      cartProduct={cartProduct}
      deleteProductCart={deleteProductCart}
      total={total}
      deleteAllCart={deleteAllCart}
    />
  );
};

export default CartContainer;
