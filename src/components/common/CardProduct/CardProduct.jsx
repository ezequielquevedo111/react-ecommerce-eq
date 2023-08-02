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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  /*CARD DEL PRODUCTO BASE*/
  return (
    <Card
      backgroundColor={"#1f304e "}
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
        backgroundColor={"#1f304e"}
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
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <Button
                variant="solid"
                size="md"
                backgroundColor="#ffffff"
                color="#1f304e"
                as={Link}
                to={`/itemDetail/${product.id}`}
              >
                Ver más
              </Button>
            </motion.div>
          </Box>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
