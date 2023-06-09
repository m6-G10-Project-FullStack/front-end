import React, { useState } from "react";
import { Footer } from "../../src/components/Footer";
import { Header } from "../../src/components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../src/components/Input";
import api from "../../src/services/api";
import { SchemaRegisterUser } from "../../src/schemas/shemas";
import { useAuth } from "../../src/contexts/authContext";
import { Modal } from "../../src/components/Modal";
import { ModalSuccess } from "../../src/components/ModalSuccess/ModalSuccess";

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
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(SchemaRegisterUser),
  });

  const onSubmitForm = async (formData: IUserRegister) => {
    registerUser({ ...formData, is_seller: isSeller });
  };

  const registerUser = async (data: IUserRegister) => {
    try {
      const newUser = await api.post("/users", data);
      setOpenModalSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {openModalSuccess && (
        <Modal setOpenModal={setOpenModalSuccess}>
          <ModalSuccess setOpenModal={setOpenModalSuccess} />
        </Modal>
      )}
      <Header />
      <main className="w-full flex justify-center items-center mt-[60px] bg-gray8 pb-[20px]">
        <div className="flex flex-col justify-start w-full max-w-[600px] shadow-md   rounded items-stretch px-11 py-12 min-w-[320px] gap-8 m-5 mt-[60px] bg-whitefixed">
          <h1 className="text-3xl font-semibold text-gray-800 m-2">Cadastro</h1>
          <h3 className="text-1xl font-semibold text-gray-800 m-2">
            Informações pessoais
          </h3>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
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

              <div>
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

              <div>
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

              <div>
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

              <div>
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

              <div>
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

              <h3 className="text-1xl font-semibold text-gray-800">
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

              <div className="flex justify-between gap-4 flex-col md:flex-row">
                <div>
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

                <div>
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

              <div>
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

              <div className="flex justify-around gap-2 flex-col md:flex-row">
                <div>
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

                <div>
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
                <div className="flex gap-2 mb-3 justify-around">
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

                <div>
                  <Input
                    type="password"
                    register={register}
                    label="Senha"
                    placeholder="Digitar senha"
                    name="password"
                  />
                </div>
                <div>
                  <Input
                    type="password"
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
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="w-[276px] py-2 px-4 rounded border-[1px] bg-brand1 text-gray9"
                  >
                    Finalizar cadastro
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
