import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SimpleCart = ({ product, deleteProductCart }) => {
  return (
    // <HStack spacing={10} w={"4xl"} h="100px" px="2">
    //   <Stack
    //     px="20"
    //     w="full"
    //     direction="row"
    //     justifyContent="space-around"
    //     alignItems="center"
    //     gap={"40px"}
    //   >
    //     <VStack flexDirection={"column"} wrap={"wrap"}>
    //       <Image
    //         src={product.img}
    //         alt={product.title}
    //         maxW="100px"
    //         maxH="70px"
    //         objectFit="contain"
    //       />
    //       <Heading size="md">{product.title}</Heading>
    //     </VStack>
    //     <Heading size="sm">C/U: {product.quantity}</Heading>
    //     <Heading size="sm" textAlign="end">
    //       $50.000
    //     </Heading>
    //     <Button
    //       size="sm"
    //       backgroundColor={"#ff9900"}
    //       color={"#071028"}
    //       onClick={() => deleteProductCart(product.id)}
    //     >
    //       Eliminar
    //     </Button>
    //   </Stack>
    // </HStack>
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="filled"
      h={"150px"}
      w={"4xl"}
      justify={"space-around"}
      align={"center"}
      backgroundColor={"#071028"}
      color={"#c68e01"}
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
            {" "}
            Cantidad: {product.quantity}
          </Text>
          <Text textAlign={"center"} p={"2px"}>
            $50.000
          </Text>
        </CardBody>

        <CardFooter
          paddingBotton={"30px"}
          display={"flex"}
          alignItems={"center"}
        >
          <Button
            variant="solid"
            backgroundColor="#FFBA52"
            color="#071028"
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
