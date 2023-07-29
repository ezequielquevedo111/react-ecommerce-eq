import { useContext, useEffect, useState } from "react";
import Checkout from "../Checkout/Checkout";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutContainer = () => {
  const { cartProduct } = useContext(CartGlobalContext);
  const navigate = useNavigate();
  /*GENERO LAS VALIDACIONES CON FORMIK Y YUP */
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      repeatEmail: "",
    },
    onSubmit: (data) => {
      Swal.fire({
        title: "¿Deseas confirmar tu compra?",
        // icon: "warning",
        // background: "#ffffff",
        // color: "#071028",
        background: "#071028",

        color: "#c68e01",
        showCancelButton: true,
        confirmButtonColor: "#16213d",
        confirmButtonText: "Aceptar",
        cancelButtonColor: "#740001",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Compra exitosa",
            color: "#c68e01",
            text: "Muchas gracias por tu compra",
            background: "#071028",
            // confirmButtonColor: "#16213d",
            showConfirmButton: false,
          });
          console.log(data);
        }
      });
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
  /*IMPIDO QUE SE RENDERICE LA PAGE DE CHECKOUT SI NO HAY NINGUN PRODUCTO AGREGADO */
  useEffect(() => {
    if (cartProduct.length === 0) {
      return navigate("/");
    }
  }, []);

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
