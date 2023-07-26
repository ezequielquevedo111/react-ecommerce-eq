import { useContext } from "react";
import Checkout from "../Checkout/Checkout";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { cartProduct } = useContext(CartGlobalContext);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      repeatEmail: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "El nombre debe contener un mínimo de 6 caracteres"),
      lastname: Yup.string()
        .required("Este campo es obligatorio")
        .min(6, "El apellido debe contener un mínimo de 6 caracteres"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(
          10,
          "El teléfono celular debe contener un mínimo de 10 caracteres"
        ),
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Debes ingresar un correo electrónico válido"),
      repeatEmail: Yup.string()
        .required("Este campo es obligatorio")
        .email("Debes ingresar un correo electrónico válido")
        .oneOf(
          [Yup.ref("email")],
          "El email ingresado no coincide con el anterior"
        ),
    }),
    validateOnChange: false,
  });
  console.log(errors);

  return (
    <Checkout
      cartProduct={cartProduct}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
