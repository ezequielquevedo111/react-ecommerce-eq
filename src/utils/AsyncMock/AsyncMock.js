import { productosMagicos } from "../../productsMock";

export const getMagicProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productosMagicos);
  }, 1500);
});
