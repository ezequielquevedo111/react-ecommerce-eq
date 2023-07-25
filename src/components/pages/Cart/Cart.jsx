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
    <Container maxW="full" h="container.lg" backgroundColor={"#0e1428"}>
      <Flex direction="column" alignItems="center">
        <VStack>
          {cartProduct.length > 0 ? (
            <Heading py="16" color={"#c68e01"} size="2xl">
              PRODUCTOS AGREGADOS
            </Heading>
          ) : (
            <Heading size="3xl" color={"#c68e01"} textAlign="center">
              No hay ningún producto en el carrito ve al inicio para iniciar tu
              compra
            </Heading>
          )}
        </VStack>
        {cartProduct.length > 0 && (
          <VStack
            backgroundColor={"#16213d"}
            w="4xl"
            h="max-content"
            color={"#c68e01"}
            alignItems="center"
            borderRadius="md"
            justifyContent="center"
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
              <Button as={Link} to={"/checkout"}>
                Finalizar compra
              </Button>
            </VStack>
          </VStack>
        )}
      </Flex>
    </Container>
  );
};

export default Cart;
