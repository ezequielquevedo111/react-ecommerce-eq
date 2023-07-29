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
          return { ...product, quantity: item.quantity };
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

  //Calcular el total del carrito//
  const getTotalAmount = () => {
    let total = cartProduct.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return total;
  };

  //Calcular el total de items//
  const getTotalProductsQuantity = () => {
    let total = cartProduct.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return total;
  };

  //Calcular y mostrar la cantidad del item agregado al carrito en el mismo carrito y en detalle//
  const getQuantityFromId = (id) => {
    const productCart = cartProduct.find(
      (product) => product.id === parseInt(id)
    );
    return productCart?.quantity;
  };

  let data = {
    cartProduct,
    addProductCart,
    deleteProductCart,
    getTotalAmount,
    getTotalProductsQuantity,
    getQuantityFromId,
  };
  return (
    <CartGlobalContext.Provider value={data}>
      {children}
    </CartGlobalContext.Provider>
  );
};

export default CartGlobalContextProvider;
