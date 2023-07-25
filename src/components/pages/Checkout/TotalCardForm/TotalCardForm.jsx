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
        <VStack alignItems="flex-start">
          <Heading size="sm">{product.title}</Heading>
        </VStack>
        <Heading size="sm" textAlign="end">
          $50.000
        </Heading>
      </Stack>
    </HStack>
  );
};

export default TotalCardForm;
