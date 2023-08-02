import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box w="100%" h="200px">
      <Flex
        backgroundColor={"#f5e6cc"}
        color={"#c68e01"}
        w="full"
        h="full"
        justify="center"
        align="center"
      >
        <Text size="lg">Copyright los derechos son reservados</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
