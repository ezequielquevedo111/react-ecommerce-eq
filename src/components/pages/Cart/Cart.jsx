import {
  AspectRatio,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = ({ product }) => {
  return (
    <Container maxW="full" h="container.lg" backgroundColor={"#0e1428"}>
      <Flex direction="column" align="center">
        <VStack>
          <Heading py={10} color={"#c68e01"} size="2xl">
            PRODUCTOS AGREGADOS
          </Heading>
        </VStack>
        <VStack
          backgroundColor={"#16213d"}
          w="4xl"
          h="xs"
          color={"#c68e01"}
          alignItems="center"
          borderRadius="md"
          justifyContent="center"
        >
          <HStack spacing={10}>
            <AspectRatio w="100px" ratio={1} justifyItems="center">
              <Image
                src={product.img}
                alt="varita de sauco"
                objectFit="contain"
              />
            </AspectRatio>
            <Stack
              spacing={10}
              w="full"
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={"22px"}
            >
              <VStack>
                <Heading size="md">{product.title}</Heading>
              </VStack>
              <Heading size="sm">Cantidad: {product.quantity}</Heading>
              <Heading size="sm" textAlign="end">
                $50.000
              </Heading>
              <Button size="sm" backgroundColor={"#ff9900"} color={"#071028"}>
                Eliminar
              </Button>
            </Stack>
          </HStack>
          <VStack h="100px" w="full" justifyContent={"flex-end"}>
            <Button as={Link} to={"/checkout"}>
              Finalizar compra
            </Button>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Cart;
