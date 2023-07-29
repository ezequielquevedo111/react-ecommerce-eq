import { useContext } from "react";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cartProduct, deleteProductCart, getTotalAmount } =
    useContext(CartGlobalContext);
  let total = getTotalAmount();

  return (
    <Cart
      cartProduct={cartProduct}
      deleteProductCart={deleteProductCart}
      total={total}
    />
  );
};

export default CartContainer;
