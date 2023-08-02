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
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

import CounterContainer from "../../common/counter/CounterContainer";
import { Toaster } from "react-hot-toast";

const ItemDetail = ({ oneProduct, addProduct, totalQuantityProduct }) => {
  /*ITEM DETAIL CON CHAKRA UI*/
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
        paddingBottom={"100px"}
      >
        PRODUCTO MÁGICO
      </Heading>

      {Object.entries(oneProduct).length > 0 ? (
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
                <Text fontSize="sm" py={"10px"}>
                  Stock:
                  {oneProduct.stock}
                </Text>
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
                  initialValue={totalQuantityProduct}
                />
              </Box>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ) : (
        <Box backgroundColor={"#0e1428"}>
          <Skeleton
            w="400px"
            h="465px"
            startColor="#071028"
            endColor="#071028"
            boxShadow={" 5px 15px 30px -10px rgba(0,0,0,0.76)"}
          ></Skeleton>
          <SkeletonText
            mt="2"
            noOfLines={1}
            spacing="1"
            skeletonHeight="80px"
            w="400px"
            startColor="#ff9900"
            endColor="#ff9900"
            boxShadow={" 5px 15px 30px -10px rgba(0,0,0,0.76)"}
          />
        </Box>
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            backgroundColor: "#16213d",
            color: "#ff9900",
            fontFamily: "Inter Tight",
          },
        }}
      />
    </Box>
  );
};

export default ItemDetail;
