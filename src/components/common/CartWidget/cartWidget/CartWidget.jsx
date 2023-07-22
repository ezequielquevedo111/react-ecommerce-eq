import { Badge, Box } from "@chakra-ui/layout";
import { BreadcrumbLink } from "@chakra-ui/react";
import { useContext } from "react";
import { GiCauldron } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CartGlobalContext } from "../../../../context/CartGlobalContext";
const CartWidget = () => {
  const { cartProduct } = useContext(CartGlobalContext);
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
        {cartProduct.length > 0 && (
          <Badge
            color={"#0e1428"}
            backgroundColor={"#c68e01"}
            variant="solid"
            height={"20px"}
            borderRadius={"5px"}
          >
            {cartProduct.length}
          </Badge>
        )}
        <GiCauldron color="#c68e01" size={"30px"} />
      </BreadcrumbLink>
    </Box>
  );
};

export default CartWidget;
