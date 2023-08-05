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
      direction={["row", "row", "row", "row", "row"]}
      overflow="hidden"
      variant="filled"
      h={["150px", "150px", "120px", "120px", "200px"]}
      w={["sm", "md", "lg", "lg", "2xl"]}
      paddingLeft={["0px", "40px", "50px", "50px", "50px"]}
      align={"center"}
      backgroundColor={"#1f1f1f"}
      color={"#FFF5E3"}
    >
      <Image
        objectFit="contain"
        w={["80px", "80px", "80px", "100px", "120px"]}
        h={["60px", "60px", "60px", "80px", "100px"]}
        marginLeft={["30px", "0px", "0px", "0px", "0px"]}
        src={product.img}
        alt="Caffe Latte"
      />

      <Stack
        display={"flex"}
        flexDirection={"row"}
        gap={["0rem", "0rem", "0rem", "0rem", "3.6rem"]}
        h={"120px"}
        w={["300px", "300px", "420px", "420px", "420px"]}
      >
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          p={["15px", "15px", "20px", "20px", "0px"]}
        >
          <Heading
            size={["xs", "xs", "xs", "xs", "md"]}
            textAlign={"center"}
            as={Link}
            to={`/itemDetail/${product.id}`}
          >
            {product.title}
          </Heading>

          <Text
            textAlign={"center"}
            p={"7px"}
            fontSize={["xs", "xs", "xs", "xs", "md"]}
          >
            Cantidad: {product.quantity}
          </Text>
          <Text
            textAlign={"center"}
            p={"2px"}
            fontSize={["xs", "xs", "xs", "xs", "md"]}
          >
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
            <DeleteIcon boxSize={[2, 2, 3, 3, 5]} />
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default SimpleCart;
