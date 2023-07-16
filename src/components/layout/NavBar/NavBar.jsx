import { Box, BreadcrumbLink, Image, SimpleGrid } from "@chakra-ui/react";
import CartWidget from "../../common/CartWidget/cartWidget/CartWidget";
import styles from "./NavBar.module.css";
import { Breadcrumb, BreadcrumbItem, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo/Logo";

function NavBar() {
  return (
    <Grid
      templateColumns="0.7fr 1fr"
      templateRows="1fr"
      alignItems={"center"}
      justifyItems={"center"}
      backgroundColor={"#0e1428"}
      color={"#c68e01"}
      p="10px"
    >
      <SimpleGrid minChildWidth="200px">
        <Box>
          <Link to="/">
            <Logo />
          </Link>
        </Box>
      </SimpleGrid>

      <GridItem paddingRight={"50px"}>
        <Breadcrumb separator=" " fontSize={"20px"}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/categoryProduct/varitas">
              Varitas
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/categoryProduct/pociones">
              Pociones
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/categoryProduct/ingredientes">
              Ingredientes
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/categoryProduct/horrocruxes">
              Horrocruxes
            </BreadcrumbLink>
          </BreadcrumbItem>
          <CartWidget />
        </Breadcrumb>
      </GridItem>
    </Grid>
  );
}

export default NavBar;
