import React, { useState } from "react";
import { Footer } from "../../src/components/Footer";
import Input from "../../src/components/Input";
import { Header } from "../../src/components/Header";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

interface IUserRegister {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  telefone: number;
  cpf: string;
  dataDeNascimento: string;
  descricao: string;
  cep: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: number;
  complemento: string;
  isSeller: boolean | undefined;
}

export default function Register() {
  const [isBuyer, setIsBuyer] = useState(undefined);
  const [isSeller, setIsSeller] = useState(undefined);

  // const navigate = useNavigate();

  // function navigateToLoginOnSuccess() {
  //   navigate("/login");
  // }

  const schema = yup.object().shape({
    nome: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, "Apenas letras são permitidas")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    senha: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 dígitos"),
    confirmarSenha: yup
      .string()
      .oneOf([yup.ref("senha")], "Senhas diferentes")
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
    telefone: yup.number().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    dataDeNascimento: yup.string().required("Campo obrigatório"),
    descricao: yup.string().required("Campo obrigatório"),
    cep: yup.string().required("Campo obrigatório"),
    estado: yup.string().required("Campo obrigatório"),
    cidade: yup.string().required("Campo obrigatório"),
    rua: yup.string().required("Campo obrigatório"),
    numero: yup.number().required("Campo obrigatório"),
    complemento: yup.string().nullable(),
    isSeller: yup.boolean().oneOf([true, false]).required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = async (formData: IUserRegister) => {
    console.log(formData);
    registerUser(formData);
  };

  //registerUser
  const registerUser = async (data: IUserRegister) => {
    console.log(data);
    // await api
    //   .post("/users", data)
    //   .then((res) => {
    //     toast.success("Cadastro realizado!");
    //     navigateToLoginOnSuccess();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="flex flex-col max-w-2">
          <h1 className="text-3xl font-semibold text-gray-800 m-2">Cadastro</h1>
          <h3 className="text-1xl font-semibold text-gray-800 m-2">
            Informações pessoais
          </h3>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="flex flex-col m-2">
              <div>
                <Input
                  label="Nome"
                  placeholder="Ex: Samantha Leana"
                  {...register("nome")}
                />
                {errors.nome && (
                  <span className="text-red-600">{errors.nome.message}</span>
                )}
              </div>

              <div className="m-2">
                <Input
                  label="Email"
                  placeholder="Ex: sammylea@vendecarro.com.br"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>

              <div className="m-2">
                <Input
                  label="CPF"
                  placeholder="000.000.000-00"
                  {...register("cpf")}
                />
                {errors.cpf && (
                  <span className="text-red-600">{errors.cpf.message}</span>
                )}
              </div>

              <div className="m-2">
                <Input
                  label="Celular"
                  placeholder="(DDD) 90000-0000"
                  {...register("telefone")}
                />
                {errors.telefone && (
                  <span className="text-red-600">
                    {errors.telefone.message}
                  </span>
                )}
              </div>

              <div className="m-2">
                <Input
                  label="Data de nascimento"
                  placeholder="00/00/00"
                  {...register("dataDeNascimento")}
                />
                {errors.dataDeNascimento && (
                  <span className="text-red-600">
                    {errors.dataDeNascimento.message}
                  </span>
                )}
              </div>

              <div className="m-2">
                <Input
                  label="Descrição"
                  placeholder="Digitar descrição"
                  {...register("descricao")}
                />
                {errors.descricao && (
                  <span className="text-red-600">
                    {errors.descricao.message}
                  </span>
                )}
              </div>

              <h3 className="text-1xl font-semibold text-gray-800 m-2">
                Informações de endereço
              </h3>
              <div>
                <Input
                  label="CEP"
                  placeholder="0000.000"
                  {...register("cep")}
                />
                {errors.cep && (
                  <span className="text-red-600">{errors.cep.message}</span>
                )}
              </div>

              <div className="flex justify-between gap-4">
                <div className="flex flex-col w-[127px]">
                  <Input
                    label="Estado"
                    placeholder="Digitar estado"
                    {...register("estado")}
                  />
                  {errors.estado && (
                    <span className="text-red-600">
                      {errors.estado.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-[127px]">
                  <Input
                    label="Cidade"
                    placeholder="Digitar cidade"
                    {...register("cidade")}
                  />
                  {errors.cidade && (
                    <span className="text-red-600">
                      {errors.cidade.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="m-2">
                <Input
                  label="Rua"
                  placeholder="Digitar rua"
                  {...register("rua")}
                />
                {errors.rua && (
                  <span className="text-red-600">{errors.rua.message}</span>
                )}
              </div>

              <div className="flex justify-around gap-2">
                <div className="flex flex-col w-[140px]">
                  <Input
                    label="Número"
                    placeholder="Digitar número"
                    {...register("numero")}
                  />
                  {errors.numero && (
                    <span className="text-red-600">
                      {errors.numero.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-[140px]">
                  <Input
                    label="Complemento"
                    placeholder="Ex: Apart 307"
                    {...register("complemento")}
                  />
                  {errors.complemento && (
                    <span className="text-red-600">
                      {errors.complemento.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-4">Tipo de conta</h5>
                <div className="flex gap-2 mb-3 justify-center">
                  <button
                    className={`w-[138px] py-2 px-4 rounded border-[1px] ${
                      isBuyer ? "bg-brand1  text-gray9" : "bg-gray9  text-gray1"
                    }`}
                    onClick={() => {
                      setIsBuyer(true);
                      setIsSeller(false);
                      setValue("isSeller", false); // set isSeller to false
                    }}
                  >
                    Comprador
                  </button>
                  <button
                    className={`w-[138px] py-2 px-4 rounded border-[1px] ${
                      isSeller ? "bg-brand1  text-gray9" : "bg-gray9 text-gray1"
                    }`}
                    onClick={() => {
                      setIsSeller(true);
                      setIsBuyer(false);
                      setValue("isSeller", true); // set isSeller to true
                    }}
                  >
                    Anunciante
                  </button>
                </div>

                <div className="m-2">
                  <Input
                    type="password"
                    label="Senha"
                    placeholder="Digitar senha"
                    {...register("senha")}
                  />
                </div>

                <div className="m-2">
                  <Input
                    type="password"
                    label="Confirmar Senha"
                    placeholder="Digitar senha"
                    {...register("confirmarSenha")}
                  />{" "}
                  {errors.confirmarSenha && (
                    <span className="text-red-600">
                      {errors.confirmarSenha.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-[276px] py-2 px-4 rounded border-[1px] bg-brand1 text-gray9"
                >
                  Finalizar cadastro
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
