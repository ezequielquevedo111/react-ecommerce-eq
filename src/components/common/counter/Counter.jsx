import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { Box, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Counter = ({ stock, add, subtract, addProduct, counterCount }) => {
  return (
    <Box display={"flex"} alignItems="center" justifyContent="center">
      {stock > 0 && (
        <Box paddingRight={"20px"}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Button
              variant="solid"
              size="md"
              backgroundColor="#ffffff"
              color="#1f304e"
              onClick={() => addProduct(counterCount)}
            >
              Agregar al carrito
            </Button>
          </motion.div>
        </Box>
      )}

      {stock > 0 && (
        <NumberInput
          defaultValue={counterCount}
          min={counterCount}
          max={stock}
          size="sm"
          w={"100px"}
          backgroundColor={"#ffffff"}
          color={"#1f304e"}
          borderColor={"#1f304e"}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper
              backgroundColor={"#fffffff"}
              color={"#1f304e"}
              onClick={add}
            />
            <NumberDecrementStepper
              backgroundColor={"#ffffff"}
              color={"#1f304e"}
              onClick={subtract}
            />
          </NumberInputStepper>
        </NumberInput>
      )}
      {stock === 0 && (
        <Box textAlign={"center"}>
          <Text color={"#071028"} fontSize="md">
            Producto fuera de stock
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Counter;
