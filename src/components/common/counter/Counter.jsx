import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";

const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <h6>{contador}</h6>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <NumberInput size="sm" defaultValue={15} min={10}>
        <NumberInputField focusBorderColor="red.200" />
        <NumberInputStepper>
          <NumberIncrementStepper
            bg="green.200"
            _active={{ bg: "green.300" }}
            children="+"
          />
          <NumberDecrementStepper
            bg="pink.200"
            _active={{ bg: "pink.300" }}
            children="-"
          />
        </NumberInputStepper>
      </NumberInput>
    </div>
  );
};

export default Counter;
