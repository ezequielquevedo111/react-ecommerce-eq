import { useState, createContext } from "react";

export const CartGlobalContext = createContext();

const CartGlobalContextProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);
  const addProductCart = (product) => {
    console.log(product);
  };
  const deleteProductCart = () => {};

  let data = { cartProduct, addProductCart, deleteProductCart };
  return (
    <CartGlobalContext.Provider value={data}>
      {children}
    </CartGlobalContext.Provider>
  );
};

export default CartGlobalContextProvider;
