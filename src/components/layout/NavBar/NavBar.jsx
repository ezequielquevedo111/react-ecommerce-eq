import CartWidget from "../../common/CartWidget/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo/Logo";
import { Box, Button, Flex, HStack, IconButton } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function NavBar({ display, setDisplay }) {
  //NAVBAR RESPONSIVE LINKEADO CON REACT ROUTER//
  return (
    <Flex
      as="header"
      w="100%"
      h={["120px", "150px"]}
      color="#FFF5E3"
      backgroundColor="#1f1f1f"
      pos="fixed"
      top="0rem"
      right="0rem"
      zIndex={[10, 15]}
    >
      <Flex
        pos="fixed"
        top="1rem"
        right={["1rem", "3rem", "5rem", "5rem", "5rem"]}
        color="#FFF5E3"
        align="center"
        justify="space-around"
        columnGap={["2rem", "0rem", "0rem", "5rem", "15rem"]}
      >
        <Flex
          align="center"
          paddingRight={["0rem", "3rem", "15rem", "0rem", "1rem"]}
        >
          <Link to="/">
            <Logo />
          </Link>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex", "flex"]}
          columnGap="12px"
        >
          <Box>
            <Box as={Link} to="/categoryProduct/varitas">
              VARITAS
            </Box>
          </Box>
          <Box>
            <Box as={Link} to="/categoryProduct/pociones">
              POCIONES
            </Box>
          </Box>
          <Box>
            <Box as={Link} to="/categoryProduct/ingredientes">
              INGREDIENTES
            </Box>
          </Box>
          <Box>
            <Box as={Link} to="/categoryProduct/horrocruxes">
              HORROCRUXES
            </Box>
          </Box>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={["flex", "flex", "flex", "none", "none"]}
          backgroundColor="#ffffff"
          onClick={() => setDisplay("flex")}
        />
        <CartWidget />
      </Flex>
      <Flex
        w="100vw"
        backgroundColor="#fff5e3"
        color="#1f1f1f"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            backgroundColor={"#fff5e3"}
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center" rowGap="3rem" py="10">
          <Box>
            <Box as={Link} to="/categoryProduct/varitas">
              VARITAS
            </Box>
          </Box>
          <Box>
            <Box as={Link} to="/categoryProduct/pociones">
              POCIONES
            </Box>
          </Box>
          <Box>
            <Box as={Link} to="/categoryProduct/ingredientes">
              INGREDIENTES
            </Box>
          </Box>
          <Box>
            <Box as={Link} to="/categoryProduct/horrocruxes">
              HORROCRUXES
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
