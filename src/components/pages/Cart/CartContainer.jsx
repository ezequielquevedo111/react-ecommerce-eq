import { useContext } from "react";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import Cart from "./Cart";
import { toast } from "react-hot-toast";

const CartContainer = () => {
  const { cartProduct, deleteProductCart, getTotalAmount, deleteAllCart } =
    useContext(CartGlobalContext);
  let total = getTotalAmount();
  const deleteCartWithAlert = () => {
    toast.success("Carrito eliminado correctamente");
    deleteAllCart();
  };

  return (
    <Cart
      cartProduct={cartProduct}
      deleteProductCart={deleteProductCart}
      total={total}
      deleteCartWithAlert={deleteCartWithAlert}
    />
  );
};

export default CartContainer;
