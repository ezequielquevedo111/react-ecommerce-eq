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
              backgroundColor="#1f304e"
              color="#ffffff"
              _hover={{ backgroundColor: "#ffffff", textColor: "#0e1428" }}
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
          backgroundColor="#1f304e"
          color="#ffffff"
          borderColor={"#1f304e"}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper
              backgroundColor="#1f304e"
              color="#ffffff"
              onClick={add}
            />
            <NumberDecrementStepper
              backgroundColor="#1f304e"
              color="#ffffff"
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
