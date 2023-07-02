import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Grid,
} from "@chakra-ui/react";

const Item = () => {
  return (
    <Grid
      width={"100%"}
      height={"1000px"}
      gridAutoColumns={"300px"}
      justifyContent={"center"}
      alignContent={"center"}
      templateRows=" 0.5fr 0.5fr"
      alignItems={"center"}
    >
      <Card maxW="sm" backgroundColor={"#f2e8d8"} color={"#333333"}>
        <CardBody>
          <Image
            src="https://res.cloudinary.com/dzzp3rans/image/upload/v1687817602/varita-de-sauco.png"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            maxWidth="100%"
            height="150px"
            objectFit="contain"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" fontFamily={"Harry Potter"}>
              Living room Sofa
            </Heading>
            <Text fontSize={"12px"}>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2" size="sm">
            <Button variant="solid" backgroundColor={"#c68e01"}>
              Ver
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Grid>
  );
};

export default Item;
