import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, addProduct, initialValue = 1 }) => {
  const [counterCount, setCounterCount] = useState(initialValue);

  const add = () => {
    counterCount < stock
      ? setCounterCount(counterCount + 1)
      : Swal.fire({
          icon: "warning",
          title: "¡Límite de stock alcanzado!",
          text: "Has seleccionado el máximo de productos en stock.",
          background: "#ffffff",
          color: "#16213d",
          confirmButtonColor: "#0e1428",
        });
  };
  const subtract = () => {
    counterCount > 1 && setCounterCount(counterCount - 1);
  };
  return (
    <Counter
      counterCount={counterCount}
      add={add}
      subtract={subtract}
      stock={stock}
      addProduct={addProduct}
    />
  );
};

export default CounterContainer;
