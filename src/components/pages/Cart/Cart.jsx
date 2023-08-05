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

    <Flex
      direction="column"
      backgroundColor={"#f5e6cc"}
      maxW={["9xl"]}
      h={["8xl", "6xl", "6xl", "5xl", "5xl"]}
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        {cartProduct.length > 0 && (
          <Heading
            py="20"
            color={"#1f1f1f"}
            size={["md", "md", "xl", "2xl", "2xl"]}
          >
            PRODUCTOS AGREGADOS
          </Heading>
        )}
      </Flex>
      {cartProduct.length > 0 ? (
        <VStack
        // flexDirection={["column", "column", "column", "column", "column"]}
        // justifyContent="center"
        // alignItems="center"
        // backgroundColor={"#ffffff"}
        // w={("400px", "xl", "800px", "600px", "80%")}
        // // w={{ sm: "400px", md: "600px", lg: "600px", xl: "600", "2xl": "60%" }}
        // h={["350px", "750px", "600px", "550px", "600px"]}
        // borderRadius="md"
        // py={["0", "8", "0", "0", "16"]}
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
            backgroundColor={"#1f1f1f"}
            color={"#FFF5E3"}
            w={["sm", "md", "lg", "lg", "2xl"]}
            h="80px"
            borderRadius="base"
            gap={"7.5rem"}
            justify={"center"}
          >
            <Text fontSize={["xs", "xs", "xs", "md", "md"]}>
              Total: $ {total}
            </Text>
            <Button
              w={["100px", "100px", "120px", "180px", "200px"]}
              fontSize={["xs", "xs", "xs", "md"]}
              variant="solid"
              backgroundColor={"#ffffff"}
              color={"#0e1428"}
              onClick={deleteCartWithAlert}
            >
              Eliminar carrito
            </Button>
          </HStack>

          <VStack h={"100px"} w="full" justifyContent={"flex-end"} py="5">
            <Button
              w={["120px", "120px", "120px", "180px", "200px"]}
              fontSize={["xs", "xs", "xs", "md"]}
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
          <Heading size="2xl" color={"#1f1f1f"} textAlign={"center"}>
            No hay ningún producto en el carrito ve al inicio para iniciar tu
            compra
          </Heading>
        </VStack>
      )}

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            backgroundColor: "#16213d",
            color: "#FFF5E3",
            fontFamily: "Inter Tight",
          },
        }}
      />
    </Flex>
  );
};

export default Cart;
