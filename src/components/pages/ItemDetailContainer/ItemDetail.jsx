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
      h={["container.lg", "container.lg", "container.lg", "container.xl"]}
      backgroundColor={"#FFF5E3"}
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        fontFamily={"Inter Tight"}
        color={"#1f1f1f"}
        size={["md", "lg", "xl", "2xl"]}
        paddingBottom={["20px", "20px", "60px", "100px"]}
        paddingTop={["20px", "0px", "0px", "0px"]}
      >
        PRODUCTO MÁGICO
      </Heading>

      {Object.entries(oneProduct).length > 0 ? (
        <Card
          backgroundColor={"#FFF5E3"}
          color={"#1f1f1f"}
          maxW={["300px", "300px", "350px", "400px"]}
          maxH={["400px", "450px", "450px", "520px"]}
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
                height={["100px", "100px", "150px", "200px"]}
                width={["100px", "100px", "120px", "150px"]}
              />
            </Stack>

            <Stack mt="6" spacing="3">
              <Heading
                size={["sm", "sm", "md", "md"]}
                fontFamily={"Harry Potter"}
              >
                {oneProduct.title}
              </Heading>
              <Box>
                <Text fontSize={["xs", "xs", "sm"]}>${oneProduct.price}</Text>
                <Text fontSize={["xs", "xs", "sm"]} py={"10px"}>
                  Stock:
                  {oneProduct.stock}
                </Text>
                <Text
                  fontSize={["xs", "xs", "sm"]}
                  py={["0px", "3px", "5px", "5px"]}
                >
                  {oneProduct.description}
                </Text>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter
            backgroundColor={"#FFF5E3"}
            borderRadius="sm"
            justify="space-around"
            p={["0px", "0px", "25px"]}
          >
            <ButtonGroup
              spacing="2"
              height={"40px"}
              width={["100px", "100px"]}
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
            startColor="#FFF5E3"
            endColor="#FFF5E3"
            boxShadow={" 5px 15px 30px -10px rgba(0,0,0,0.76)"}
          ></Skeleton>
          <SkeletonText
            mt="2"
            noOfLines={1}
            spacing="1"
            skeletonHeight="80px"
            w="400px"
            startColor="#FFF5E3"
            endColor="#FFF5E3"
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
            color: "#FFF5E3",
            fontFamily: "Inter Tight",
          },
        }}
      />
    </Box>
  );
};

export default ItemDetail;
