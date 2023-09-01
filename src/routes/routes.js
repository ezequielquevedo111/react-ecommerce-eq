import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../components/pages/ItemDetailContainer/ItemDetailContainer.jsx";
import CartContainer from "../components/pages/Cart/CartContainer.jsx";
import CheckoutContainer from "../components/pages/Checkout/CheckoutContainer.jsx";

export const routesArray = [
  {
    id: 1,
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: 2,
    path: "/categoryProduct/:category",
    Element: ItemListContainer,
  },
  {
    id: 3,
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: 4,
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: 5,
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
