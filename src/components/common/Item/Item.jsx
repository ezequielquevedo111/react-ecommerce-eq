import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  ButtonGroup,
  Text,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CounterContainer from "../counter/CounterContainer";

const Item = ({ product, showContent }) => {
  return (
    <Card
      backgroundColor={"#f2e8d8"}
      color={"#333333"}
      size="md"
      maxW="lg"
      display={"flex"}
    >
      <CardBody>
        <Image
          src={product.img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          margin={"auto"}
          objectFit={"contain"}
          height={"200px"}
          width={"200px"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" fontFamily={"Harry Potter"}>
            {product.title}
          </Heading>
          {showContent ? (
            <Box>
              <Text fontSize="sm">{product.description}</Text>
            </Box>
          ) : (
            <></>
          )}
        </Stack>
      </CardBody>
      <CardFooter
        backgroundColor={"#73877B"}
        borderRadius="sm"
        justify="space-around"
      >
        <ButtonGroup
          spacing="2"
          height={"40px"}
          width={"100px"}
          fontSize={"12px"}
          backgroundColor={"#f2e8d8"}
          borderRadius={"2px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          {!showContent ? (
            <Box>
              <Link to={`/itemDetail/${product.id}`}>Ver más</Link>
            </Box>
          ) : (
            <Box>
              <Link
                height={"45px"}
                width={"100px"}
                margin={"auto"}
                sx={{ height: "55px" }}
              >
                Agregar al carrito
              </Link>
            </Box>
          )}
        </ButtonGroup>
        {showContent ? <CounterContainer stock={product.stock} /> : <></>}
      </CardFooter>
    </Card>
  );
};

export default Item;
