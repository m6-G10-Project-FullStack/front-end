import React, { SetStateAction, useState } from "react";
import Select from "../Select";
import { Button } from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RxDragHandleDots1 } from "react-icons/rx";
import api from "../../services/api";
import { useAuth } from "../../contexts/authContext";
import jwt_decode from "jwt-decode";

export interface iModalEditProfileProps {
  setOpenModalEditProfile: React.Dispatch<SetStateAction<boolean>>;
}

export interface iUserEditProfile {
  id?: string;
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthday?: string;
  description?: string;
}

const ModalEditProfile = ({
  setOpenModalEditProfile,
}: iModalEditProfileProps) => {
  const { token, router } = useAuth();
  const decodedToken: any = jwt_decode(token!);

  const FormSchema = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email("Email inválido").notRequired(),
    cpf: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    birthday: yup.string().notRequired(),
    description: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserEditProfile>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmitForm = async (data: iUserEditProfile) => {
    console.log(data);
    const filteredData = Object.entries(data).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        if (value !== "") {
          acc[key] = value;
        }

        return acc;
      },
      {}
    );
    EditProfileAPI(filteredData);
    router.reload();
  };

  console.log(decodedToken);

  const EditProfileAPI = async (data: iUserEditProfile) => {
    try {
      await api.patch(`/users/${decodedToken.sub}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray10 w-full h-max max-h-[700px] max-w-custom344 flex flex-col content-center rounded-lg px-6 py-4 md:max-w-[520px] relative overflow-y-auto scrollbar-w-6 scrollbar-track-gray-100 scrollbar-thumb-gray-500 scrollbar-thumb-rounded-md">
      <div className="flex w-full justify-between items-center">
        <p className="font-lex font-medium text-base text-gray1">
          Editar perfil
        </p>
        <button
          className="h-10 flex border-none bg-transparent text-gray3 text-custom22 cursor-pointer"
          onClick={() => setOpenModalEditProfile(false)}
          type="button"
        >
          x
        </button>
      </div>
      <div className="flex flex-col max-w-2">
        <h1 className="text-3xl font-semibold text-gray-800 m-2">Cadastro</h1>
        <h3 className="text-1xl font-semibold text-gray-800 m-2">
          Informações pessoais
        </h3>
        <form onSubmit={handleSubmit(onSubmitForm)}>
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
                <span className="text-red-600">{errors.birthday.message}</span>
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
          </div>

          <div>
            <Button
              variant="gray-6"
              onClick={() => setOpenModalEditProfile(false)}
            >
              Cancelar
            </Button>
            <Button variant="alert-2">Excluir perfil</Button>
            <Button variant="brand-1" type="submit">
              Salvar alterações
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditProfile;
