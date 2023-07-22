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

import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ oneProduct, addProduct }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      h="800px"
      backgroundColor={"#0e1428"}
      justifyItems="center"
      alignItems="center"
      paddingTop="80px"
    >
      <Heading
        fontFamily={"Inter Tight"}
        color={"#c68e01"}
        size="2xl"
        paddingBottom={"70px"}
      >
        PRODUCTO MÁGICO
      </Heading>
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
              src={oneProduct.img}
              alt={oneProduct.title}
              objectFit="contain"
              height={"200px"}
              width={"150px"}
            />
          </Stack>

          <Stack mt="6" spacing="3">
            <Heading size="md" fontFamily={"Harry Potter"}>
              {oneProduct.title}
            </Heading>
            <Box>
              <Heading size="sm">${oneProduct.price}</Heading>
              <Text fontSize="sm" py={"5px"}>
                {oneProduct.description}
              </Text>
            </Box>
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
              <CounterContainer
                stock={oneProduct.stock}
                addProduct={addProduct}
              />
            </Box>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default ItemDetail;
