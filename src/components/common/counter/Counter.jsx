import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Box } from "@chakra-ui/react";

const Counter = ({ stock }) => {
  return (
    <Box display={"flex"} alignItems="center" justifyContent="center">
      <NumberInput
        defaultValue={1}
        min={1}
        max={stock}
        size="sm"
        maxW={"100"}
        backgroundColor={"#071028"}
        color={"#ff9900"}
        borderColor={"#ff9900"}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper
            backgroundColor={"#071028"}
            color={"#ff9900"}
          />
          <NumberDecrementStepper
            backgroundColor={"#071028"}
            color={"#ff9900"}
          />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};

export default Counter;
