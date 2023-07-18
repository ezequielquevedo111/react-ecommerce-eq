import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const DetailForm = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={[0, 5, 10]}
      spacing={10}
      alignItems="flex-start"
    >
      <VStack spacing={5} alignItems={"flex-start"}>
        <Heading size={["md", "xl", "2xl"]}>Finaliza tu compra.</Heading>
        <Text>
          Llena este formulario con tus datos para finalizar tu compra.
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2]} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input placeholder="Ezequiel" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Apellido</FormLabel>
            <Input placeholder="Quevedo" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Telefono</FormLabel>
            <Input placeholder="Telefono" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="ezequielquevedo111@gmail.com" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Repite tu email</FormLabel>
            <Input placeholder="ezequielquevedo111@gmail.com" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Acepto las condiciones</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full" backgroundColor={"#ffffff"}>
            Finalizar compra
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default DetailForm;
