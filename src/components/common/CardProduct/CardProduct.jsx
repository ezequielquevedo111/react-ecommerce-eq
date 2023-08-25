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
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  /*CARD DEL PRODUCTO BASE*/
  return (
    <Card
      backgroundColor={"#FFF5E3"}
      color={"#1f1f1f"}
      size="md"
      w={["200px", "250px", "375px", "375px"]}
      h={["250px", "300px", "370px", "400px"]}
      display={"flex"}
      boxShadow={" 5px 15px 30px -10px rgba(0,0,0,0.76)"}
    >
      <CardBody>
        <Stack align="center">
          <Image
            boxSize={["200px", "250px", "350px"]}
            src={product.img}
            alt={product.title}
            objectFit="contain"
            height={["110px", "110px", "200px", "200px"]}
            width={["110px", "110px", "150px", "150px"]}
          />
        </Stack>

        <Stack mt="6" spacing="3">
          <Text fontSize={["md", "lg", "xl"]} fontFamily={"Harry Potter"}>
            {product.title}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter
        backgroundColor={"#FFF5E3"}
        color={"#1f1f1f"}
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
                size={["xs", "sm", "md"]}
                backgroundColor="#1f304e"
                color="#ffffff"
                as={Link}
                to={`/itemDetail/${product.id}`}
                _hover={{ backgroundColor: "#ffffff", textColor: "#0e1428" }}
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
