const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <h6>{contador}</h6>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </div>
  );
};

export default Counter;
