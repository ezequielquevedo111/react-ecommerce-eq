// import { Box } from "@mui/material";
// import Badge from "@mui/material/Badge";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Badge, Box } from "@chakra-ui/layout";
import { GiCauldron } from "react-icons/gi";
const CartWidget = () => {
  return (
    // <Box>
    //   <Badge badgeContent={2} sx={{ color: "#810909" }}>
    //     {/* <LocalGroceryStoreIcon
    //       sx={{
    //         color: "#810909",
    //         width: 30,
    //         height: 30,
    //         marginLeft: "10px",
    //         marginBottom: "5px",
    //       }}
    //     /> */}
    //     <GiCauldron color="810909" size={"30px"} />
    //   </Badge>
    // </Box>
    <Box display={"flex"} flexDirection={"row-reverse"} paddingLeft={"10px"}>
      <Badge color={"#c68e01"} backgroundColor={"#0e1428"}>
        {"3"}
      </Badge>
      <GiCauldron color="#c68e01" size={"30px"} />
    </Box>
  );
};

export default CartWidget;
