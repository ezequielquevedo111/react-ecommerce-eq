import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SaveErrorPage = () => {
  return (
    <Flex
      backgroundColor="#1f1f1f"
      color="#FFF5E3"
      h="7xl"
      w="full"
      flexDirection="column"
      gap="50px"
      justify="center"
      align="center"
    >
      <Heading>¡Ups!</Heading>
      <Heading>
        No pudimos descifrar que truco mágico estuvo detrás de este
        inconveniente, vuelve al inicio para continuar.
      </Heading>
      <Button as={Link} to="/">
        Volver al inicio
      </Button>
    </Flex>
  );
};

export default SaveErrorPage;
