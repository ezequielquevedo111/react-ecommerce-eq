import { useContext, useEffect, useState } from "react";
import Checkout from "../Checkout/Checkout";
import { CartGlobalContext } from "../../../context/CartGlobalContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { database } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const CheckoutContainer = () => {
  const { cartProduct, deleteAllCart, getTotalAmount } =
    useContext(CartGlobalContext);
  const [orderById, setOrderById] = useState(null);
  const navigate = useNavigate();
  const total = getTotalAmount();

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
        background: "#ffffff",
        color: "#16213d",
        showCancelButton: true,
        confirmButtonColor: "#16213d",
        confirmButtonText: "Aceptar",
        cancelButtonColor: "#740001",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          //Creo la orden para setearla en Firebase//
          let order = {
            buyer: data,
            items: cartProduct,
            total,
            date: serverTimestamp(),
          };

          const newOrderCollection = collection(database, "orders");
          addDoc(newOrderCollection, order).then((res) => setOrderById(res.id));

          //Modifico el stock en Firebase//

          cartProduct.forEach((product) => {
            updateDoc(doc(database, "magicProducts", product.id), {
              stock: product.stock - product.quantity,
            });
          });

          deleteAllCart();
        }
      });
    },

    //Validaciones del Form//
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
      total={total}
      orderById={orderById}
    />
  );
};

export default CheckoutContainer;
