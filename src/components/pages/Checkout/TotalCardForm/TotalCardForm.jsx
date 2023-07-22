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
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="space-between"
      backgroundColor={"#16213d"}
    >
      <VStack alignItems="flex-start" spacing={5}>
        <Heading size="2xl">Resumen.</Heading>
        <Text>Aquí puedes visualizar el detalle de tu compra.</Text>
      </VStack>
      <HStack spacing={8}>
        <AspectRatio w="80px" ratio={1}>
          <Image src={product.img} alt="varita de sauco" objectFit="cover" />
        </AspectRatio>
        <Stack
          spacing={3}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack alignItems="flex-start">
            <Heading size="md">{product.title}</Heading>
          </VStack>
          <Heading size="sm" textAlign="end">
            $50.000
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text>Subtotal</Text>
          <Heading size="sm">$50.000</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between">
        <Text>Total</Text>
        <Heading size="lg">$50.000</Heading>
      </HStack>
    </VStack>
  );
};

export default TotalCardForm;
