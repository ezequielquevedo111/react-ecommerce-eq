import { useState } from "react";
import Checkout from "../Checkout/Checkout";

const CheckoutContainer = () => {
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
    />
  );
};

export default CheckoutContainer;
