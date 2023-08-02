import CardProduct from "../../common/CardProduct/CardProduct";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";

const ItemList = ({ greeting, products, category }) => {
  /*ITEM LIST O HOME CON MAPEO PARA PINTAR PRODUCTOS*/
  return (
    <Container maxW="container.2xl" p="0">
      {category === undefined && (
        <SimpleGrid columns={[1, 2]} backgroundColor={"#f5e6cc "} p={5}>
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
        backgroundColor={"#f5e6cc "}
      >
        <Heading
          fontSize="5xl"
          color={"#c68e01"}
          fontFamily={"Inter Tight"}
          paddingBottom="20"
        >
          {!category ? greeting : category.toUpperCase()}
        </Heading>
        {products.length >= 1 ? (
          <SimpleGrid minChildWidth="300px" spacing={6}>
            {products.map((product) => {
              return (
                <CardProduct
                  product={product}
                  key={product.id}
                  showContent={false}
                />
              );
            })}
          </SimpleGrid>
        ) : (
          <SimpleGrid minChildWidth="300px" spacing={6}>
            <SkeletonCard />
          </SimpleGrid>
        )}
      </Flex>
    </Container>
  );
};

export default ItemList;
