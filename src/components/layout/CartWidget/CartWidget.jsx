import { Box } from "@mui/material";
import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
const CartWidget = () => {
  return (
    <Box>
      <Badge badgeContent={2} sx={{ color: "#ffffff" }}>
        <LocalGroceryStoreIcon
          sx={{
            width: 30,
            height: 30,
            marginLeft: "10px",
            marginBottom: "5px",
          }}
        />
      </Badge>
    </Box>
  );
};

export default CartWidget;
