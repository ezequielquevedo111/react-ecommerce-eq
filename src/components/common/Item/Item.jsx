import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card
      maxW="sm"
      backgroundColor={"#f2e8d8"}
      color={"#333333"}
      height={"400px"}
      width={"300px"}
      display={"flex"}
      flexDirection={"column"}
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
        </Stack>
      </CardBody>
      <CardFooter backgroundColor={"#73877B "} borderRadius="sm">
        <ButtonGroup
          spacing="2"
          height={"30px"}
          width={"80px"}
          fontSize={"14px"}
          backgroundColor={"#f2e8d8"}
          borderRadius={"2px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link to={`/itemDetail/${product.id}`}>Ver más</Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
