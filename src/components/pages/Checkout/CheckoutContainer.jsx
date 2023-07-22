import { useContext, useState } from "react";
import Checkout from "../Checkout/Checkout";
import { CartGlobalContext } from "../../../context/CartGlobalContext";

const CheckoutContainer = () => {
  const { cartProduct } = useContext(CartGlobalContext);
  const [dataForm, setDataForm] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const handleChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    console.log(dataForm);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.table(dataForm);
  return (
    <Checkout
      handleChange={handleChange}
      dataForm={dataForm}
      handleSubmit={handleSubmit}
      cartProduct={cartProduct}
    />
  );
};

export default CheckoutContainer;
