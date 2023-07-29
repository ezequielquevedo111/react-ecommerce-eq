import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Alert, AlertTitle, Box, Button, CloseButton } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Counter = ({ stock, add, subtract, addProduct, counterCount }) => {
  return (
    <Box display={"flex"} alignItems="center" justifyContent="center">
      <Box paddingRight={"20px"}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Button
            variant="solid"
            size="md"
            backgroundColor="#071028"
            color="#ff9900"
            onClick={() => addProduct(counterCount)}
          >
            Agregar al carrito
          </Button>
        </motion.div>
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
