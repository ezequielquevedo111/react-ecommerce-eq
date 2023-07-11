import Item from "../../common/Item/Item";
import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

const ItemList = ({ greeting, products, category }) => {
  return (
    <Container maxW="container.2xl" p="0">
      <Flex
        flexDirection="column"
        textAlign="center"
        alignContent="center"
        p={40}
        backgroundColor={"#0e1428"}
      >
        <Heading
          fontSize="5xl"
          color={"#c68e01"}
          fontFamily={"Playfair Display SC"}
          paddingBottom="20"
        >
          {!category ? greeting : category}
        </Heading>
        <SimpleGrid minChildWidth="300px" spacing={6}>
          {products.map((product) => {
            return (
              <Item product={product} key={product.id} showContent={false} />
            );
          })}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default ItemList;
