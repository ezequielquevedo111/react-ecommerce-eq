import { productosMagicos } from "../../productsMock";

export const getMagicProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productosMagicos);
  }, 1500);
});

export const getCategoryProducts = (category) => {
  productosMagicos.filter((product) => product.category === category);
};
