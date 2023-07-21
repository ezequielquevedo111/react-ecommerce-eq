import { Box, BreadcrumbLink, Image, SimpleGrid } from "@chakra-ui/react";
import CartWidget from "../../common/CartWidget/cartWidget/CartWidget";
import { Breadcrumb, BreadcrumbItem, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo/Logo";

function NavBar() {
  return (
    <SimpleGrid
      // templateColumns="0.7fr 1fr"
      // templateRows="1fr"
      // alignItems={"center"}
      // justifyItems={"center"}
      columns={2}
      justifyItems={"center"}
      backgroundColor={"#0e1428"}
      color={"#c68e01"}
    >
      <SimpleGrid maxW={["50px", "100px", "200px"]}>
        <Box>
          <Link to="/">
            <Logo />
          </Link>
        </Box>
      </SimpleGrid>

      <GridItem
        p={[5, 10]}
        // display={"flex"}
        // flexDirection={["column", "column"]}
      >
        <Breadcrumb separator=" " fontSize={["sm", "md", "xl"]}>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/categoryProduct/varitas"
              textDecoration={"none"}
            >
              VARITAS
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/categoryProduct/pociones"
              textDecoration={"none"}
            >
              POCIONES
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/categoryProduct/ingredientes"
              textDecoration={"none"}
            >
              INGREDIENTES
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/categoryProduct/horrocruxes"
              textDecoration={"none"}
            >
              HORROCRUXES
            </BreadcrumbLink>
          </BreadcrumbItem>
          <CartWidget />
        </Breadcrumb>
      </GridItem>
    </SimpleGrid>
  );
}

export default NavBar;
