import { Container, Flex } from "@chakra-ui/react";
import DetailForm from "./DetailForm/DetailForm";
import TotalCardForm from "./TotalCardForm/TotalCardForm";

const Checkout = () => {
  return (
    <Container maxW="full" backgroundColor={"#0e1428"} py={[5, 20, 40]}>
      <Container
        maxW={["400px", "600px", "1280px"]}
        maxH={["360px", "400px", "1000px"]}
        p={[0, 5, 10]}
        backgroundColor={"#071028"}
        color={"#c68e01"}
        borderRadius="md"
      >
        <Flex
          h={{ base: "400px", md: "400px", lg: "900px" }}
          py={[0, 10, 20]}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <DetailForm />
          <TotalCardForm />
        </Flex>
      </Container>
    </Container>
  );
};

export default Checkout;
