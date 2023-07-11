import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock }) => {
  const [counter, setCounter] = useState(0);
  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  return (
    <Counter contador={counter} sumar={sumar} restar={restar} stock={stock} />
  );
};

export default CounterContainer;
