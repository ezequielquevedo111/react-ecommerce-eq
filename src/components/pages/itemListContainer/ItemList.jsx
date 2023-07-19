import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

const ItemList = ({ greeting, products, category }) => {
  return (
    <Container maxW="container.2xl" p="0">
      {category === undefined && (
        <SimpleGrid columns={[1, 2]} backgroundColor={"#0e1428"} p={5}>
          <Box
            display={"flex"}
            w="100%"
            h={"900px"}
            textAlign={"end"}
            alignItems={"center"}
            color={"#c68e01"}
            justifyContent={"center"}
          >
            <Heading fontSize={"8xl"} fontWeight={"900"}>
              LOS PRODUCTOS MÁGICOS QUE TANTO DESEAS
            </Heading>
          </Box>
        </SimpleGrid>
      )}
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
          fontFamily={"Inter Tight"}
          paddingBottom="20"
        >
          {!category ? greeting : category.toUpperCase()}
        </Heading>
        <SimpleGrid minChildWidth="300px" spacing={6}>
          {products.map((product) => {
            return (
              <ItemDetail
                product={product}
                key={product.id}
                showContent={false}
              />
            );
          })}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default ItemList;
