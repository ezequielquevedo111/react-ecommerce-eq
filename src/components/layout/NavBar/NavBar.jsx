import { Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import CartWidget from "../../common/CartWidget/cartWidget/CartWidget";
import styles from "./NavBar.module.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Grid
      templateColumns="1fr 1fr"
      templateRows="1fr"
      alignItems={"center"}
      justifyItems={"center"}
      backgroundColor={"#0e1428"}
      color={"#c68e01"}
    >
      <GridItem paddingRight={"100px"}>
        <Link to="/">
          <Image
            className={styles.logo}
            alt=""
            src="https://res.cloudinary.com/dzzp3rans/image/upload/v1688335019/LOGOTIPO_xquq7p.png"
          />{" "}
        </Link>
      </GridItem>

      <GridItem paddingRight={"50px"}>
        <Breadcrumb separator=" " fontSize={"20px"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            {/* <BreadcrumbLink href="#">Categorias</BreadcrumbLink> */}
            <Menu>
              <MenuButton>Categorias</MenuButton>
              <MenuList>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Nosotros</BreadcrumbLink>
          </BreadcrumbItem>
          <CartWidget />
        </Breadcrumb>
      </GridItem>
    </Grid>
  );
}

export default NavBar;
