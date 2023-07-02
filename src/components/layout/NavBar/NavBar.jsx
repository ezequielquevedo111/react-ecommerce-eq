import CartWidget from "../../common/CartWidget/cartWidget/CartWidget";
import styles from "./NavBar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#e2c046",
          height: "120px",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingRight: "30px",
        }}
      >
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/dzzp3rans/image/upload/v1686881265/logo_2222_esl11w.png"
          alt=""
        />
        <Toolbar>
          <Button
            sx={{
              backgroundColor: "#e2c046",
              fontFamily: "Harry Potter",
              color: "#810909",
              margin: "10px",
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              backgroundColor: "#e2c046",
              fontFamily: "Harry Potter",
              color: "#810909",
              margin: "10px",
            }}
          >
            Categorias
          </Button>
          <Button
            sx={{
              backgroundColor: "#e2c046",
              fontFamily: "Harry Potter",
              color: "#810909",
              margin: "10px",
            }}
          >
            Nosotros
          </Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
