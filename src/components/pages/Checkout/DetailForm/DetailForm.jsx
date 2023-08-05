import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const DetailForm = ({ handleSubmit, handleChange, errors }) => {
  /*FORM COMPLETO CON VALIDACIONES*/
  return (
    <form onSubmit={handleSubmit}>
      <VStack
        w={["360px", "400px", "700px", "md", "xl"]}
        h={["full", "500px", "600px", "850px", "full"]}
        p={[0, 5, 10]}
        paddingTop={["45px", "45px", "45px", "45px", "45px"]}
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
            <FormControl isInvalid={errors.name !== undefined ? true : false}>
              <FormLabel>Nombre</FormLabel>
              <Input
                placeholder="Ezequiel"
                type="text"
                name="name"
                onChange={handleChange}
                backgroundColor={"#f1f1f1"}
                color={"#1f1f1f"}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl
              isInvalid={errors.lastname !== undefined ? true : false}
            >
              <FormLabel>Apellido</FormLabel>
              <Input
                placeholder="Quevedo"
                type="text"
                name="lastname"
                onChange={handleChange}
                backgroundColor={"#f1f1f1"}
                color={"#1f1f1f"}
              />
              <FormErrorMessage>{errors.lastname}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={errors.phone !== undefined ? true : false}>
              <FormLabel>Telefono</FormLabel>
              <Input
                placeholder="Telefono"
                type="number"
                name="phone"
                onChange={handleChange}
                backgroundColor={"#f1f1f1"}
                color={"#1f1f1f"}
              />
              <FormErrorMessage>{errors.phone}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={errors.email !== undefined ? true : false}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="ezequielquevedo111@gmail.com"
                type="text"
                name="email"
                onChange={handleChange}
                backgroundColor={"#f1f1f1"}
                color={"#1f1f1f"}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl
              isInvalid={errors.repeatEmail !== undefined ? true : false}
            >
              <FormLabel>Repite tu email</FormLabel>
              <Input
                placeholder="ezequielquevedo111@gmail.com"
                type="text"
                name="repeatEmail"
                onChange={handleChange}
                backgroundColor={"#f1f1f1"}
                color={"#1f1f1f"}
              />
              <FormErrorMessage>{errors.repeatEmail}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Acepto las condiciones</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button
              size={["md", "md", "md", "md", "lg"]}
              w={["auto", "auto", "full", "full", "full"]}
              backgroundColor={"#ffffff"}
              type="submit"
            >
              Finalizar compra
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </form>
  );
};

export default DetailForm;
