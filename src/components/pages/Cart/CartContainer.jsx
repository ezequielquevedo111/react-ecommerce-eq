import Cart from "../Cart/Cart";

import { useContext } from "react";
import { CartGlobalContext } from "../../../context/CartGlobalContext";

const CartContainer = () => {
  const { cartProduct } = useContext(CartGlobalContext);
  console.log(cartProduct);
  return <Cart />;
};

export default CartContainer;
