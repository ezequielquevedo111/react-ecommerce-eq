import { Badge, Box } from "@chakra-ui/layout";
import { BreadcrumbLink } from "@chakra-ui/react";
import { GiCauldron } from "react-icons/gi";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row-reverse"}
      paddingLeft={"10px"}
      href={"#"}
    >
      <BreadcrumbLink
        display={"flex"}
        flexDirection={"row-reverse"}
        as={Link}
        to="/cart"
      >
        {/*INGRESAR RUTA DEL CARRITO*/}
        <Badge
          color={"#0e1428"}
          backgroundColor={"#c68e01"}
          variant="solid"
          height={"20px"}
          borderRadius={"5px"}
        >
          {"3"}
        </Badge>
        <GiCauldron color="#c68e01" size={"30px"} />
      </BreadcrumbLink>
    </Box>
  );
};

export default CartWidget;
