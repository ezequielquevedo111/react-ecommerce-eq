import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SimpleCart = ({ product, deleteProductCart }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="filled"
      h={"150px"}
      w={"4xl"}
      justify={"space-evenly"}
      align={"center"}
      backgroundColor={"#1f1f1f"}
      color={"#FFF5E3"}
    >
      <Image
        objectFit="contain"
        maxW={{ base: "100%", sm: "100px" }}
        maxH={"100px"}
        src={product.img}
        alt="Caffe Latte"
      />

      <Stack
        display={"flex"}
        flexDirection={"row"}
        gap={"6.6rem"}
        h={"120px"}
        w={"420px"}
        margin={"right"}
      >
        <CardBody display={"flex"} flexDirection={"column"} p={"0px"}>
          <Heading
            size="md"
            textAlign={"center"}
            as={Link}
            to={`/itemDetail/${product.id}`}
          >
            {product.title}
          </Heading>

          <Text textAlign={"center"} p={"7px"}>
            Cantidad: {product.quantity}
          </Text>
          <Text textAlign={"center"} p={"2px"}>
            ${product.price}
          </Text>
        </CardBody>

        <CardFooter
          display={"flex"}
          alignItems={"center"}
          sx={{ paddingBottom: "30px" }}
        >
          <Button
            variant="solid"
            backgroundColor={"#ffffff"}
            color={"#0e1428"}
            onClick={() => deleteProductCart(product.id)}
          >
            <DeleteIcon boxSize={5} />
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default SimpleCart;
