import { useState, createContext } from "react";
import { toast } from "react-hot-toast";
export const CartGlobalContext = createContext();

const CartGlobalContextProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  const addProductCart = (item) => {
    let isItSet = isItSaved(item.id);
    if (isItSet) {
      let newCart = cartProduct.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + item.quantity };
        } else {
          return product;
        }
      });
      setCartProduct(newCart);
    } else {
      setCartProduct([...cartProduct, item]);
    }
  };
  const deleteProductCart = (id) => {
    let newProductsCart = cartProduct.filter((product) => product.id !== id);
    setCartProduct(newProductsCart);
    toast.success("Producto eliminado del carrito");
  };

  const isItSaved = (id) => {
    let productSaved = cartProduct.some((product) => product.id === id);
    return productSaved;
  };

  let data = {
    cartProduct,
    addProductCart,
    deleteProductCart,
  };
  return (
    <CartGlobalContext.Provider value={data}>
      {children}
    </CartGlobalContext.Provider>
  );
};

export default CartGlobalContextProvider;
