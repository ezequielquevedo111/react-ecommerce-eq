import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Box, Button } from "@chakra-ui/react";

const Counter = ({ stock, add, subtract, addProduct, counterCount }) => {
  return (
    <Box display={"flex"} alignItems="center" justifyContent="center">
      <Box paddingRight={"20px"}>
        <Button
          variant="solid"
          size="md"
          backgroundColor="#071028"
          color="#ff9900"
          onClick={() => addProduct(counterCount)}
        >
          Agregar al carrito
        </Button>
      </Box>
      <NumberInput
        defaultValue={counterCount}
        min={counterCount}
        max={stock}
        size="sm"
        w={"100px"}
        backgroundColor={"#071028"}
        color={"#ff9900"}
        borderColor={"#ff9900"}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper
            backgroundColor={"#071028"}
            color={"#ff9900"}
            onClick={add}
          />
          <NumberDecrementStepper
            backgroundColor={"#071028"}
            color={"#ff9900"}
            onClick={subtract}
          />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};

export default Counter;
