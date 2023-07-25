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
  return (
    <form onSubmit={handleSubmit}>
      <VStack
        w={["md", "xl"]}
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
            <FormControl isInvalid={errors.name !== undefined ? true : false}>
              <FormLabel>Nombre</FormLabel>
              <Input
                placeholder="Ezequiel"
                type="text"
                name="name"
                onChange={handleChange}
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
              />
              <FormErrorMessage>{errors.repeatEmail}</FormErrorMessage>
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Acepto las condiciones</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button
              size="lg"
              w="full"
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
