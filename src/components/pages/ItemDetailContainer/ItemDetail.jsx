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
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ product, showContent }) => {
  return (
    <Card
      backgroundColor={"#f2e8d8"}
      color={"#333333"}
      size="md"
      maxW="400px"
      maxH="500px"
      display={"flex"}
    >
      <CardBody>
        <Stack align="center">
          <Image
            boxSize="350px"
            src={product.img}
            alt={product.title}
            objectFit="contain"
            height={"200px"}
            width={"150px"}
          />
        </Stack>

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
          flexDirection={"row"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          {!showContent ? (
            <Box>
              <Button variant="solid" size="md" backgroundColor="#f2e8d8">
                <Link to={`/itemDetail/${product.id}`}>Ver más</Link>
              </Button>
            </Box>
          ) : (
            <Box>
              <Button
                variant="solid"
                size="md"
                backgroundColor="#f2e8d8"
                marginLeft={"20px"}
              >
                <Link>Agregar al carrito</Link>
              </Button>
            </Box>
          )}
        </ButtonGroup>
        {showContent ? <CounterContainer stock={product.stock} /> : <></>}
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
