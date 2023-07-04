import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  ButtonGroup,
  Grid,
} from "@chakra-ui/react";

const Item = ({ products }) => {
  return (
    <Grid
      autoRows={"600px"}
      gridTemplateColumns={"1fr 1fr 1fr 1fr"}
      rowGap={"25px"}
      alignItems={"center"}
      justifyItems={"center"}
      flexWrap={"wrap"}
    >
      {products.map((product) => {
        return (
          <Card
            maxW="sm"
            backgroundColor={"#f2e8d8"}
            color={"#333333"}
            key={product.id}
            height={"400px"}
            width={"300px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <CardBody>
              <Image
                src={product.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                margin={"auto"}
                objectFit={"contain"}
                height={"200px"}
                width={"200px"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" fontFamily={"Harry Potter"}>
                  {product.title}
                </Heading>
              </Stack>
            </CardBody>
            <CardFooter backgroundColor={"#73877B "} borderRadius="sm">
              <ButtonGroup spacing="2" size="sm">
                <Button variant="solid" backgroundColor={"#f2e8d8"}>
                  Ver más
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Item;
