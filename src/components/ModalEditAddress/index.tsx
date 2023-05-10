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

export interface iModalEditAddressProps {
  setOpenModalEditAddress: React.Dispatch<SetStateAction<boolean>>;
}

export interface iUserEditAddress {
  cep?: string;
  city?: string;
  state?: string;
  street?: string;
  number?: string;
  complement?: string;
}

const ModalEditAddress = ({
  setOpenModalEditAddress: setOpenModalEditAddress,
}: iModalEditAddressProps) => {
  const { token, router } = useAuth();
  const decodedToken: any = jwt_decode(token!);

  const FormSchema = yup.object().shape({
    cep: yup.string().notRequired(),
    city: yup.string().notRequired(),
    state: yup.string().notRequired(),
    street: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserEditAddress>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmitForm = async (data: iUserEditAddress) => {
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

  const EditProfileAPI = async (data: iUserEditAddress) => {
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
        <p className="font-lex text-2xl font-medium text-gray1">
          Editar endereço
        </p>
        <button
          className="h-10 flex border-none bg-transparent text-gray3 text-custom22 cursor-pointer"
          onClick={() => setOpenModalEditAddress(false)}
          type="button"
        >
          x
        </button>
      </div>
      <div className="flex flex-col max-w-2">
        <h3 className="text-1xl font-semibold text-gray-800 m-2">
          Informações pessoais
        </h3>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="flex flex-col m-2">
            <div>
              <Input
                register={register}
                label="CEP"
                placeholder="89888.888"
                name="cep"
              />
              {errors.cep && (
                <span className="text-red-600">{errors.cep.message}</span>
              )}
            </div>

            <div className="m-2">
              <Input
                register={register}
                label="Estado"
                placeholder="Acre"
                name="state"
              />
              {errors.state && (
                <span className="text-red-600">{errors.state.message}</span>
              )}
            </div>

            <div className="m-2">
              <Input
                register={register}
                label="Cidade"
                placeholder="Rio Branco"
                name="city"
              />
              {errors.city && (
                <span className="text-red-600">{errors.city.message}</span>
              )}
            </div>

            <div className="m-2">
              <Input
                register={register}
                label="street"
                placeholder="Avenida dos Dinossauros"
                name="street"
              />
              {errors.street && (
                <span className="text-red-600">{errors.street.message}</span>
              )}
            </div>

            <div className="m-2">
              <Input
                register={register}
                label="Número"
                placeholder="1029r"
                name="number"
              />
              {errors.number && (
                <span className="text-red-600">{errors.number.message}</span>
              )}
            </div>

            <div className="m-2">
              <Input
                register={register}
                label="Complemento"
                placeholder="Apart 12"
                name="complement"
              />
              {errors.complement && (
                <span className="text-red-600">
                  {errors.complement.message}
                </span>
              )}
            </div>
          </div>

          <div className="float-right space-x-4">
            <Button
              variant="gray-6"
              onClick={() => setOpenModalEditAddress(false)}
            >
              Cancelar
            </Button>
            <Button variant="brand-1" type="submit">
              Salvar alterações
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditAddress;
