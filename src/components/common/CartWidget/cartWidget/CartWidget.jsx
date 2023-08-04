import { Badge, Box } from "@chakra-ui/layout";
import { BreadcrumbLink } from "@chakra-ui/react";
import { useContext } from "react";
import { GiCauldron } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CartGlobalContext } from "../../../../context/CartGlobalContext";
const CartWidget = () => {
  const { cartProduct, getTotalProductsQuantity } =
    useContext(CartGlobalContext);
  let total = getTotalProductsQuantity();
  /*WIDGET DEL CARRITO CON CONDICIONAL PARA QUE MUESTRE O NO LOS PRODUCTOS AGREGADOS*/
  return (
    <Box
      display={"flex"}
      flexDirection={"row-reverse"}
      paddingLeft={"10px"}
      href={"#"}
    >
      <Box display={"flex"} flexDirection={"row-reverse"} as={Link} to="/cart">
        {cartProduct.length > 0 && (
          <Badge
            color={"#1f1f1f"}
            backgroundColor={"#FFF5E3"}
            variant="solid"
            height={"20px"}
            borderRadius={"5px"}
          >
            {total}
          </Badge>
        )}
        <GiCauldron color="#FFF5E3" size={"30px"} />
      </Box>
    </Box>
  );
};

export default CartWidget;
