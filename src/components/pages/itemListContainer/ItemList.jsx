import CardProduct from "../../common/CardProduct/CardProduct";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";
import { ArrowDownIcon } from "@chakra-ui/icons";

const ItemList = ({ greeting, products, category }) => {
  /*ITEM LIST O HOME CON MAPEO PARA PINTAR PRODUCTOS*/
  return (
    <Container maxW="container.2xl" p="0">
      {category === undefined && (
        <Flex
          direction="column"
          justify="space-evenly"
          align="center"
          paddingLeft={["15px", "30px"]}
          w="100%"
          h={["600px", "1200px"]}
          color={"#FFF5E3"}
          backgroundColor={"#1f1f1f"}
        >
          <Heading
            fontSize={["4xl", "5xl", "7xl", "9xl"]}
            fontWeight={"900"}
            textAlign="left"
          >
            LOS PRODUCTOS MÁGICOS QUE TANTO DESEAS
          </Heading>
        </Flex>
      )}
      <Flex
        flexDirection="column"
        textAlign="center"
        alignItems={["center", "center"]}
        justify={["space-around"]}
        p={40}
        backgroundColor={"#FFF5E3"}
      >
        <Heading
          fontSize={["3xl", "3xl", "5xl"]}
          color={"#1f1f1f"}
          fontFamily={"Inter Tight"}
          paddingTop="100px"
          paddingBottom="20"
        >
          {!category ? greeting : category.toUpperCase()}
        </Heading>
        {products.length >= 1 ? (
          <Flex wrap="wrap" columnGap="60px" rowGap="60px" justify="center">
            {products.map((product) => {
              return (
                <CardProduct
                  product={product}
                  key={product.id}
                  showContent={false}
                />
              );
            })}
          </Flex>
        ) : (
          <Flex wrap="wrap" columnGap="60px" rowGap="60px" justify="center">
            <SkeletonCard />
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default ItemList;
