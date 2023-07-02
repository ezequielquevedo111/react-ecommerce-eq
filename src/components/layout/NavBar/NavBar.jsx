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
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";

function NavBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar
    //     position="static"
    //     sx={{
    //       backgroundColor: "#e2c046",
    //       height: "120px",
    //       flexDirection: "row",
    //       justifyContent: "space-around",
    //       alignItems: "center",
    //       paddingRight: "30px",
    //     }}
    //   >
    //     <img
    //       className={styles.logo}
    //       src="https://res.cloudinary.com/dzzp3rans/image/upload/v1686881265/logo_2222_esl11w.png"
    //       alt=""
    //     />
    //     <Toolbar>
    //       <Button
    //         sx={{
    //           backgroundColor: "#e2c046",
    //           fontFamily: "Harry Potter",
    //           color: "#810909",
    //           margin: "10px",
    //         }}
    //       >
    //         Home
    //       </Button>
    //       <Button
    //         sx={{
    //           backgroundColor: "#e2c046",
    //           fontFamily: "Harry Potter",
    //           color: "#810909",
    //           margin: "10px",
    //         }}
    //       >
    //         Categorias
    //       </Button>
    //       <Button
    //         sx={{
    //           backgroundColor: "#e2c046",
    //           fontFamily: "Harry Potter",
    //           color: "#810909",
    //           margin: "10px",
    //         }}
    //       >
    //         Nosotros
    //       </Button>
    //       <CartWidget />
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <Grid
      templateColumns="2fr 0.5fr"
      templateRows="1fr"
      alignItems={"center"}
      backgroundColor={"#0e1428"}
      color={"#c68e01"}
      fontFamily={"Harry Potter"}
    >
      <GridItem>
        <Image
          className={styles.logo}
          alt=""
          src="https://res.cloudinary.com/dzzp3rans/image/upload/v1686881265/logo_2222_esl11w.png"
        />
      </GridItem>
      <GridItem>
        <Breadcrumb separator=" ">
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
