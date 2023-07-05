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
      templateColumns="1fr 1fr"
      templateRows="1fr"
      alignItems={"center"}
      justifyItems={"center"}
      backgroundColor={"#0e1428"}
      color={"#c68e01"}
    >
      <GridItem paddingRight={"100px"}>
        <Image
          className={styles.logo}
          alt=""
          src="https://res.cloudinary.com/dzzp3rans/image/upload/v1688335019/LOGOTIPO_xquq7p.png"
        />
      </GridItem>
      <GridItem paddingRight={"50px"}>
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
