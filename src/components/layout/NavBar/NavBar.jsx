import { Image } from "@chakra-ui/react";
import CartWidget from "../../common/CartWidget/cartWidget/CartWidget";
import styles from "./NavBar.module.css";
import { Breadcrumb, BreadcrumbItem, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Grid
      templateColumns="0.7fr 1fr"
      templateRows="1fr"
      alignItems={"center"}
      justifyItems={"center"}
      backgroundColor={"#0e1428"}
      color={"#c68e01"}
    >
      <GridItem>
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
            <Link to="/categoryProduct/varitas">Varitas</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/categoryProduct/pociones">Pociones</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/categoryProduct/ingredientes">Ingredientes</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/categoryProduct/horrocruxes">Horrocruxes</Link>
          </BreadcrumbItem>
          <CartWidget />
        </Breadcrumb>
      </GridItem>
    </Grid>
  );
}

export default NavBar;
