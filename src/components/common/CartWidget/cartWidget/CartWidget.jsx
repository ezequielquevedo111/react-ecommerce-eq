import { Badge, Box } from "@chakra-ui/layout";
import { BreadcrumbLink } from "@chakra-ui/react";
import { GiCauldron } from "react-icons/gi";
const CartWidget = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row-reverse"}
      paddingLeft={"10px"}
      href={"#"}
    >
      <BreadcrumbLink display={"flex"} flexDirection={"row-reverse"}>
        {/*INGRESAR RUTA DEL CARRITO*/}
        <Badge color={"#c68e01"} backgroundColor={"#0e1428"}>
          {"3"}
        </Badge>
        <GiCauldron color="#c68e01" size={"30px"} />
      </BreadcrumbLink>
    </Box>
  );
};

export default CartWidget;
