import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box w="100%" h="300px">
      <Flex
        backgroundColor={"#1f1f1f"}
        color={"#FFF5E3"}
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
