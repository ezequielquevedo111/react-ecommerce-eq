import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  return <Counter contador={counter} sumar={sumar} restar={restar} />;
};

export default CounterContainer;
