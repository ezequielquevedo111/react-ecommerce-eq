import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderCard = ({ orderById }) => {
  return (
    <Flex
      w={"full"}
      backgroundColor={"#16213d"}
      color={"#c68e01"}
      h={"md"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={"45px"}
    >
      <Heading>Muchas gracias por tu compra:</Heading>
      <Text>El código de tu compra es: {orderById}</Text>
      <Text>Ve a la sección ordenes para visualizar el detalle.</Text>
      <Flex w={"full"} justifyContent={"center"}>
        <Button variant="solid" backgroundColor={"#ffffff"} as={Link} to={"/"}>
          Volver a comprar
        </Button>
      </Flex>
    </Flex>
  );
};

export default OrderCard;
