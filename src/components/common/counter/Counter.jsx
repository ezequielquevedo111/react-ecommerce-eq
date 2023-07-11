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
    <Box display={"flex"} flexDirection={"column"} marginLeft={"50px"}>
      <NumberInput
        defaultValue={1}
        min={1}
        max={stock}
        size="sm"
        maxW={"100"}
        backgroundColor={"#f2e8d8"}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};

export default Counter;
