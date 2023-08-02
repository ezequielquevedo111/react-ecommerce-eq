import {
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import TotalCardForm from "./TotalCardForm/TotalCardForm";
import DetailFormContainer from "./DetailForm/DetailFormContainer";
import { Toaster } from "react-hot-toast";
import OrderCardContainer from "./OrderCard/OrderCardContainer";

const Checkout = ({
  cartProduct,
  handleSubmit,
  handleChange,
  errors,
  total,
  orderById,
}) => {
  return (
    <Container maxW="full" backgroundColor={"#f5e6cc"} py={[5, 20, 40]}>
      <Container
        maxW={["400px", "600px", "1280px"]}
        maxH={["360px", "400px", "1000px"]}
        p={[0, 5, 10]}
        // backgroundColor={"#f5e6cc"}
        backgroundColor={"#ffffff"}
        color={"#c68e01"}
        borderRadius="md"
      >
        {!orderById ? (
          <Flex
            h={{ base: "400px", md: "400px", lg: "950px" }}
            py={[0, 10, 20]}
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <DetailFormContainer
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              errors={errors}
            />
            <VStack
              w="full"
              h="full"
              p={10}
              spacing={10}
              alignItems="space-between"
              // backgroundColor={"#16213d"}
              backgroundColor={"#1f304e"}
            >
              <VStack alignItems="flex-start" spacing={5}>
                <Heading size="2xl">Resumen.</Heading>
                <Text>Aquí puedes visualizar el detalle de tu compra.</Text>
              </VStack>
              {cartProduct.map((product) => {
                return <TotalCardForm key={product.id} product={product} />;
              })}
              <VStack spacing={4} alignItems="stretch" w="full">
                <HStack justifyContent="space-between">
                  <Text>Subtotal</Text>
                  <Heading size="sm">${total}</Heading>
                </HStack>
              </VStack>
              <Divider />
              <HStack justifyContent="space-between">
                <Text>Total</Text>
                <Heading size="lg">${total}</Heading>
              </HStack>
            </VStack>
            <Toaster />
          </Flex>
        ) : (
          <OrderCardContainer orderById={orderById} />
        )}
      </Container>
    </Container>
  );
};

export default Checkout;
