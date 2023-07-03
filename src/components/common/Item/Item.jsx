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

const Item = ({ products }) => {
  return (
    <Grid
      autoRows={"600px"}
      gridTemplateColumns={"1fr 1fr 1fr"}
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
            height={"460px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <CardBody>
              <Image
                src={product.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                maxWidth="100%"
                height={"150px"}
                margin={"auto"}
                objectFit="contain"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" fontFamily={"Harry Potter"}>
                  {product.title}
                </Heading>
                <Text fontSize={"14px"}>{product.description}</Text>
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
        );
      })}
    </Grid>
  );
};

export default Item;
