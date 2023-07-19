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

const Cart = () => {
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
          w="2xl"
          h="xs"
          color={"#c68e01"}
          alignItems="center"
          borderRadius="md"
          justifyContent="space-evenly"
        >
          <HStack spacing={16}>
            <AspectRatio w="100px" ratio={1} alignItems="flex-start">
              <Image
                src="https://res.cloudinary.com/dzzp3rans/image/upload/v1687817602/varita-de-sauco.png"
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
                <Heading size="md">Varita de Sauco</Heading>
              </VStack>
              <Heading size="sm">Cantidad: 4</Heading>
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
