import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import DetailForm from "./DetailForm/DetailForm";
import TotalCardForm from "./TotalCardForm/TotalCardForm";

const Checkout = () => {
  return (
    <Container maxW={"1980px"} backgroundColor={"#0e1428"} py={40}>
      <Container
        maxW="container.xl"
        maxH="container.xl"
        p={10}
        backgroundColor={"#071028"}
        color={"#c68e01"}
        borderRadius="md"
      >
        <Flex h="100vh" py={20}>
          <DetailForm />
          <TotalCardForm />
        </Flex>
      </Container>
    </Container>
  );
};

export default Checkout;
