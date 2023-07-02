import { Image } from "@chakra-ui/react";
import CartWidget from "../../common/CartWidget/cartWidget/CartWidget";
import styles from "./NavBar.module.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <Grid
      templateColumns="2fr 1fr"
      templateRows="1fr"
      alignItems={"center"}
      backgroundColor={"#0e1428"}
      color={"#c68e01"}
      fontFamily={"Harry Potter"}
      position={"sticky"}
    >
      <GridItem>
        <Image
          className={styles.logo}
          alt=""
          src="https://res.cloudinary.com/dzzp3rans/image/upload/v1688335019/LOGOTIPO_xquq7p.png"
        />
      </GridItem>
      <GridItem>
        <Breadcrumb separator=" " fontSize={"20px"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Categorias</BreadcrumbLink>
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
