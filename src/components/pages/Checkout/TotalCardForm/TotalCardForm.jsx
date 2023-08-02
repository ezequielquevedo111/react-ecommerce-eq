import {
  AspectRatio,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const TotalCardForm = ({ product }) => {
  /*RESUMEN DE LAS COMPRAS - BRIEF*/
  return (
    <HStack spacing={8}>
      <AspectRatio w="14" ratio={1}>
        <Image src={product.img} alt="varita de sauco" objectFit="cover" />
      </AspectRatio>
      <Stack
        spacing={3}
        w="full"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack alignItems="flex-start" flexWrap={"no-wrap"}>
          <Heading size="sm">{product.title}</Heading>
        </VStack>
        <VStack alignItems="center">
          <Heading size="sm">C/U: {product.quantity}</Heading>
        </VStack>
        <Heading size="sm" textAlign="end">
          Valor: ${product.price}
        </Heading>
      </Stack>
    </HStack>
  );
};

export default TotalCardForm;
