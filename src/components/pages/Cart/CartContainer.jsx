import Cart from "../Cart/Cart";
import { useContext } from "react";
import { CartGlobalContext } from "../../../context/CartGlobalContext";

const CartContainer = () => {
  const { cartProduct, deleteProductCart } = useContext(CartGlobalContext);
  return (
    <>
      <Cart cartProduct={cartProduct} deleteProductCart={deleteProductCart} />;
    </>
  );
};

export default CartContainer;
