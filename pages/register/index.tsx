import React, { useState } from "react";
import { Footer } from "../../src/components/Footer";
import { Header } from "../../src/components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../src/components/Input";
import api from "../../src/services/api";
import { ShemaRegisterUser } from "../../src/schemas/shemas";
import { useAuth } from "../../src/contexts/authContext";

interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmarSenha: string;
  phone: string;
  cpf: string;
  birthday: string;
  description: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string | null;
  is_seller: boolean;
}

export default function Register() {
  const { router } = useAuth();
  const [isSeller, setIsSeller] = useState<boolean>(false);

  // const navigate = useNavigate();

  // function navigateToLoginOnSuccess() {
  //   navigate("/login");
  // }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(ShemaRegisterUser),
  });

  const onFormSubmit = async (formData: IUserRegister) => {
    console.log(formData);
    registerUser({ ...formData, is_seller: isSeller });
  };

  const registerUser = async (data: IUserRegister) => {
    try {
      const newUser = await api.post("/users", data);
      console.log("usuário cadastrado");
      if (newUser) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
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
                  register={register}
                  label="Nome"
                  placeholder="Ex: Samantha Leana"
                  name="name"
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>

              <div className="m-2">
                <Input
                  register={register}
                  label="Email"
                  placeholder="Ex: sammylea@vendecarro.com.br"
                  name="email"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>

              <div className="m-2">
                <Input
                  register={register}
                  label="CPF"
                  placeholder="000.000.000-00"
                  name="cpf"
                />
                {errors.cpf && (
                  <span className="text-red-600">{errors.cpf.message}</span>
                )}
              </div>

              <div className="m-2">
                <Input
                  register={register}
                  label="Celular"
                  placeholder="(DDD) 90000-0000"
                  name="phone"
                />
                {errors.phone && (
                  <span className="text-red-600">{errors.phone.message}</span>
                )}
              </div>

              <div className="m-2">
                <Input
                  register={register}
                  label="Data de nascimento"
                  placeholder="00/00/00"
                  name="birthday"
                />
                {errors.birthday && (
                  <span className="text-red-600">
                    {errors.birthday.message}
                  </span>
                )}
              </div>

              <div className="m-2">
                <Input
                  register={register}
                  label="Descrição"
                  placeholder="Digitar descrição"
                  name="description"
                />
                {errors.description && (
                  <span className="text-red-600">
                    {errors.description.message}
                  </span>
                )}
              </div>

              <h3 className="text-1xl font-semibold text-gray-800 m-2">
                Informações de endereço
              </h3>
              <div>
                <Input
                  register={register}
                  label="CEP"
                  placeholder="0000.000"
                  name="cep"
                />
                {errors.cep && (
                  <span className="text-red-600">{errors.cep.message}</span>
                )}
              </div>

              <div className="flex justify-between gap-4">
                <div className="flex flex-col w-[127px]">
                  <Input
                    register={register}
                    label="Estado"
                    placeholder="Digitar estado"
                    name="state"
                  />
                  {errors.state && (
                    <span className="text-red-600">{errors.state.message}</span>
                  )}
                </div>

                <div className="flex flex-col w-[127px]">
                  <Input
                    register={register}
                    label="Cidade"
                    placeholder="Digitar cidade"
                    name="city"
                  />
                  {errors.city && (
                    <span className="text-red-600">{errors.city.message}</span>
                  )}
                </div>
              </div>

              <div className="m-2">
                <Input
                  register={register}
                  label="Rua"
                  placeholder="Digitar rua"
                  name="street"
                />
                {errors.street && (
                  <span className="text-red-600">{errors.street.message}</span>
                )}
              </div>

              <div className="flex justify-around gap-2">
                <div className="flex flex-col w-[140px]">
                  <Input
                    register={register}
                    label="Número"
                    placeholder="Digitar número"
                    name="number"
                  />
                  {errors.number && (
                    <span className="text-red-600">
                      {errors.number.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-[140px]">
                  <Input
                    register={register}
                    label="Complemento"
                    placeholder="Ex: Apart 307"
                    name="complement"
                  />
                  {errors.complement && (
                    <span className="text-red-600">
                      {errors.complement.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-4">Tipo de conta</h5>
                <div className="flex gap-2 mb-3 justify-center">
                  <button
                    type="button"
                    className={`w-[138px] py-2 px-4 rounded border-[1px] ${
                      !isSeller
                        ? "bg-brand1  text-gray9"
                        : "bg-gray9  text-gray1"
                    }`}
                    onClick={() => {
                      setIsSeller(false);
                    }}
                  >
                    Comprador
                  </button>
                  <button
                    type="button"
                    className={`w-[138px] py-2 px-4 rounded border-[1px] ${
                      isSeller ? "bg-brand1  text-gray9" : "bg-gray9 text-gray1"
                    }`}
                    onClick={() => {
                      setIsSeller(true);
                    }}
                  >
                    Anunciante
                  </button>
                </div>

                <div className="m-2">
                  <Input
                    register={register}
                    label="Senha"
                    placeholder="Digitar senha"
                    name="password"
                  />
                </div>
                <div className="m-2">
                  <Input
                    register={register}
                    label="Confirmar Senha"
                    placeholder="Digitar senha"
                    name="confirmarSenha"
                  />
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
