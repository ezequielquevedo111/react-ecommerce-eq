import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderCard = ({ orderById }) => {
  return (
    <Flex
      w={"full"}
      backgroundColor={"#f1f1f1"}
      color={"#1f1f1f"}
      h={"md"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={"45px"}
    >
      <Heading>Muchas gracias por tu compra:</Heading>
      <Text>El código de tu compra es: {orderById}</Text>
      <Flex w={"full"} justifyContent={"center"}>
        <Button
          variant="solid"
          as={Link}
          to={"/"}
          backgroundColor={"#0e1428"}
          color={"#ffffff"}
          _hover={{ backgroundColor: "#f1f1f1", textColor: "#0e1428" }}
        >
          Volver a comprar
        </Button>
      </Flex>
    </Flex>
  );
};

export default OrderCard;
