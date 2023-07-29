import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

function Footer() {
  return (
    // <div className={styles.footerContainer}>
    //   <h3>Copyright los derechos son reservados</h3>
    // </div>
    <Box w="100%" h="200px">
      <Flex
        backgroundColor={"#0e1428"}
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
