import * as yup from "yup";

export const SchemaLogin = yup.object().shape({
  email: yup.string().email("email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Mínimo de 8 dígitos"),
});

export const SchemaRegisterUser = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Apenas letras são permitidas")
    .required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Mínimo de 8 dígitos"),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes")
    .min(8, "Mínimo de 8 dígitos")
    .required("Campo Obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  birthday: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  cep: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  complement: yup.string().nullable(),
});
