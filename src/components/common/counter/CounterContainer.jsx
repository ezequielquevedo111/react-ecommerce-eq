import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, addProduct, initialValue = 1 }) => {
  const [counterCount, setCounterCount] = useState(initialValue);
  const add = () => {
    counterCount < stock
      ? setCounterCount(counterCount + 1)
      : alert("maximo alcanzado");
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
