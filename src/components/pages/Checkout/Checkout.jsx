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
    <Flex
      maxW={["500px", "full", "full", "full", "full"]}
      h={["9xl", "8xl", "1600px", "8xl", "8xl"]}
      p={[5, 5, 10]}
      paddingTop={["200px", "0px", "0px", "0px", "0px"]}
      paddingBottom={["0", "200px", "300px", "0", "0"]}
      backgroundColor={"#1f1f1f"}
      color={"#FFF5E3"}
      borderRadius="md"
      justifyContent="center"
      align="center"
    >
      {!orderById ? (
        <Flex
          h={["1500px", "5xl", "9xl", "3xl", "6xl"]}
          py={[10, 10, 10, 10, 20]}
          wrap={[
            "wrap-reverse",
            "wrap-reverse",
            "wrap-reverse",
            "nowrap",
            "nowrap",
          ]}
          justifyContent={["center", "center", "center", "flex-end", "initial"]}
          alignContent={["center", "center", "flex-end", "flex-end", "center"]}
        >
          <DetailFormContainer
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
          />
          <VStack
            w={["360px", "400px", "700px", "450px", "full"]}
            h={["560px", "500px", "600px", "850px", "full"]}
            p={10}
            spacing={10}
            alignItems="space-between"
            backgroundColor={"#FFF5E3"}
            color={"#1f1f1f"}
          >
            <VStack alignItems="flex-start" spacing={5}>
              <Heading size={["xl", "xl", "xl", "2xl", "2xl"]}>
                Resumen.
              </Heading>
              <Text>Aquí puedes visualizar el detalle de tu compra.</Text>
            </VStack>
            {cartProduct.map((product) => {
              return <TotalCardForm key={product.id} product={product} />;
            })}
            <VStack spacing={4} alignItems="stretch" w="full">
              <HStack justifyContent="space-between">
                <Text fontSize={["md", "md", "2xl", "2xl", "2xl"]}>
                  Subtotal
                </Text>
                <Heading size={["xs", "xs", "xs", "sm", "sm"]}>
                  ${total}
                </Heading>
              </HStack>
            </VStack>
            <Divider />
            <HStack justifyContent="space-between">
              <Text fontSize={["sm", "sm", "md", "md", "md"]}>Total</Text>
              <Heading size={["sm", "sm", "md", "lg", "lg"]}>${total}</Heading>
            </HStack>
          </VStack>
          <Toaster />
        </Flex>
      ) : (
        <Flex w="full" h={["2xl"]}>
          <OrderCardContainer orderById={orderById} />
        </Flex>
      )}
    </Flex>
  );
};

export default Checkout;
