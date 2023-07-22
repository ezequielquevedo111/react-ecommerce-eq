import {
  AspectRatio,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";

const SimpleCart = ({ product, deleteProductCart }) => {
  return (
    <HStack spacing={10}>
      <AspectRatio w="100px" ratio={1} justifyItems="center">
        <Image src={product.img} alt="varita de sauco" objectFit="contain" />
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
        <Button
          size="sm"
          backgroundColor={"#ff9900"}
          color={"#071028"}
          onClick={() => deleteProductCart(product.id)}
        >
          Eliminar
        </Button>
      </Stack>
    </HStack>
  );
};

export default SimpleCart;
