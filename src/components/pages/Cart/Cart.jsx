import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import SimpleCart from "./SimpleCart";
import { Toaster } from "react-hot-toast";

const Cart = ({
  cartProduct,
  deleteProductCart,
  total,
  deleteCartWithAlert,
}) => {
  return (
    /*PAGE DE CART CON CONDICIONAL DEPENDIENDO SI HAY ITEMS AGREGADOS O NO*/
    <Container
      maxW="full"
      h={cartProduct.length > 0 ? "8xl" : "4xl"}
      backgroundColor={"#FFF5E3"}
    >
      <Flex direction="column" alignItems="center">
        <Box>
          <VStack>
            {cartProduct.length > 0 && (
              <Heading py="16" color={"#c68e01"} size="2xl">
                PRODUCTOS AGREGADOS
              </Heading>
            )}
          </VStack>
          {cartProduct.length > 0 ? (
            <VStack
              backgroundColor={"#ffffff"}
              w="7xl"
              h="max-content"
              color={"#1f304e"}
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
              <HStack
                backgroundColor={"#f1f1f1"}
                color={"#1f304e"}
                w="4xl"
                h="80px"
                borderRadius="md"
                gap={"7.5rem"}
                justify={"center"}
              >
                <Text size="md">Total: $ {total}</Text>
                <Button
                  variant="solid"
                  backgroundColor={"#ffffff"}
                  color={"#0e1428"}
                  onClick={deleteCartWithAlert}
                >
                  Eliminar carrito
                </Button>
              </HStack>

              <VStack h="100px" w="full" justifyContent={"flex-end"} py="5">
                <Button
                  as={Link}
                  to={"/checkout"}
                  backgroundColor={"#1f304e"}
                  color={"#ffffff"}
                  _hover={{ backgroundColor: "#f1f1f1", textColor: "#1f304e" }}
                >
                  Continuar compra
                </Button>
              </VStack>
            </VStack>
          ) : (
            <VStack maxW="full" h="4xl" justifyContent="center">
              <Heading size="2xl" color={"#c68e01"} textAlign={"center"}>
                No hay ningún producto en el carrito ve al inicio para iniciar
                tu compra
              </Heading>
            </VStack>
          )}
        </Box>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              backgroundColor: "#16213d",
              color: "#ff9900",
              fontFamily: "Inter Tight",
            },
          }}
        />
      </Flex>
    </Container>
  );
};

export default Cart;
