import Cart from "../Cart/Cart";

import { useContext } from "react";
import { CartGlobalContext } from "../../../context/CartGlobalContext";

const CartContainer = () => {
  const { cartProduct } = useContext(CartGlobalContext);
  return (
    <>
      {cartProduct.map((product) => {
        return <Cart key={product.id} product={product} />;
      })}
    </>
  );
};

export default CartContainer;
