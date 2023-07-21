import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  return (
    <Card
      backgroundColor={"#071028"}
      color={"#c68e01"}
      size="md"
      maxW="400px"
      maxH="500px"
      display={"flex"}
      boxShadow={" 5px 15px 30px -10px rgba(0,0,0,0.76)"}
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
        </Stack>
      </CardBody>
      <CardFooter
        backgroundColor={"#ff9900"}
        borderRadius="sm"
        justify="space-around"
      >
        <ButtonGroup
          spacing="2"
          height={"40px"}
          width={"100px"}
          fontSize={"12px"}
          borderRadius={"2px"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Box>
            <Button
              variant="solid"
              size="md"
              backgroundColor="#071028"
              color="#ff9900"
              as={Link}
              to={`/itemDetail/${product.id}`}
            >
              Ver más
            </Button>
          </Box>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
