import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import SimpleCart from "./SimpleCart";

const Cart = ({ cartProduct, deleteProductCart }) => {
  return (
    <Container maxW="full" h="8xl" backgroundColor={"#0e1428"}>
      <Flex direction="column" alignItems="center">
        <Box>
          <VStack>
            {cartProduct.length > 0 ? (
              <Heading py="16" color={"#c68e01"} size="2xl">
                PRODUCTOS AGREGADOS
              </Heading>
            ) : (
              <Heading size="3xl" color={"#c68e01"} textAlign="center">
                No hay ningún producto en el carrito ve al inicio para iniciar
                tu compra
              </Heading>
            )}
          </VStack>
          {cartProduct.length > 0 && (
            <VStack
              backgroundColor={"#16213d"}
              w="7xl"
              h="max-content"
              color={"#c68e01"}
              borderRadius="md"
              py="8"
            >
              {cartProduct.map((product) => {
                return (
                  <SimpleCart
                    key={product.id}
                    product={product}
                    deleteProductCart={deleteProductCart}
                  />
                );
              })}
              <VStack h="100px" w="full" justifyContent={"flex-end"} py="5">
                <Button
                  as={Link}
                  to={"/checkout"}
                  variant="solid"
                  backgroundColor={"#0e1428"}
                  color={"#c68e01"}
                >
                  Continuar compra
                </Button>
              </VStack>
            </VStack>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default Cart;
