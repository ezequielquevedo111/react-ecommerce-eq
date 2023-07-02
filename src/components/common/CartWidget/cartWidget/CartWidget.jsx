import { Box } from "@mui/material";
import Badge from "@mui/material/Badge";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { GiCauldron } from "react-icons/gi";
const CartWidget = () => {
  return (
    <Box>
      <Badge badgeContent={2} sx={{ color: "#810909" }}>
        {/* <LocalGroceryStoreIcon
          sx={{
            color: "#810909",
            width: 30,
            height: 30,
            marginLeft: "10px",
            marginBottom: "5px",
          }}
        /> */}
        <GiCauldron color="810909" size={"30px"} />
      </Badge>
    </Box>
  );
};

export default CartWidget;
