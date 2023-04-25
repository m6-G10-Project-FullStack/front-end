import React, { useState } from "react";
import Select from "../Select";
import { Button } from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "inspector";
import { RxDragHandleDots1 } from "react-icons/rx";
import api from "../../services/api";
import { AuthContext, useAuth } from "../../contexts/authContext";

interface iCarRegister {
  brand: string;
  model: string;
  year: number;
  km: number;
  fuel: string;
  color: string;
  fipe: number;
  price: number;
  description: string;
  coverImage: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
}

interface iModalAnuncioProps {
  setOpenModalAnuncio: React.Dispatch<React.SetStateAction<boolean>>;
  brands?: string[];
  setSelectBrand?: React.Dispatch<React.SetStateAction<string>>;
  cars?: string[];
  setSelectCar?: React.Dispatch<React.SetStateAction<string>>;
  years?: string[];
  setSelectYear?: React.Dispatch<React.SetStateAction<string>>;
  fuels?: string[];
  setSelectFuel?: React.Dispatch<React.SetStateAction<string>>;
  fipe?: number;
}

const ModalAnuncio = ({
  setOpenModalAnuncio,
  brands,
  setSelectBrand,
  cars,
  setSelectCar,
  years,
  setSelectYear,
  fuels,
  setSelectFuel,
  fipe,
}: iModalAnuncioProps) => {
  const arrayMarcas = brands;
  const arrayModelos = cars;
  const arrayAnos = years;
  const arrayCombustivel = fuels;
  const [inputCount, setInputCount] = useState([1, 2]);
  const { user } = useAuth();

  const handleInputCount = () => {
    if (inputCount.length < 6) {
      setInputCount([...inputCount, inputCount.length + 1]);
    }
  };

  const FormSchema: any = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required(),
    fuel: yup.string().required(),
    km: yup.number().required(),
    color: yup.string().required(),
    fipe: yup.number().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    coverImage: yup.string().required(),
    image1: yup.string(),
    image2: yup.string(),
    image3: yup.string(),
    image4: yup.string(),
    image5: yup.string(),
    image6: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iCarRegister>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmitForm = async (data: iCarRegister) => {
    console.log(data);

    const brandId = await getBrandId(data.brand);
    console.log(brandId);

    const newCar = {
      year: data.year,
      fuel: data.fuel,
      km: data.km,
      color: data.color,
      fipe: data.fipe,
      price: data.price,
      description: data.description,
      model: data.model,
      brandId: brandId,
      coverImage: data.coverImage,
      userId: user.id,
    };

    const carId = await createCar(newCar);
    console.log(carId);

    // const {brand, year, fuel, km, color, fipe, price, description, model, coverImage, ...gallery} = data
    // for (const key, value in gallery) {
    //   let newPhoto = {
    //     "carId": carId,
    //     "photo_link": value
    //   }
    //   await api.post("/gallery", newPhoto)
    // }
  };
  const getBrandId = async (brand: string) => {
    try {
      const { data } = await api.get(`/brands/${brand}`);
      return data.id;
    } catch (error) {
      console.log(error);
    }
  };

  const createCar = async (car: any) => {
    try {
      const { data } = await api.post("/cars");
      return data.id;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray10 w-full h-max max-h-[700px] max-w-custom344 flex flex-col content-center rounded-lg px-6 py-4 md:max-w-lg relative overflow-y-auto scrollbar-w-6 scrollbar-track-gray-100 scrollbar-thumb-gray-500 scrollbar-thumb-rounded-md">
      <div className="flex w-full justify-between items-center">
        <p className="font-lex font-medium text-base text-gray1">
          Criar anúncio
        </p>
        <button
          className="h-10 flex border-none bg-transparent text-gray3 text-custom22 cursor-pointer"
          onClick={() => setOpenModalAnuncio(false)}
          type="button"
        >
          x
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col w-full py-4 gap-2"
      >
        <h3 className="font-inter font-medium text-sm leading-6 text-gray1 mb-6">
          Informações do veículo
        </h3>
        <Select
          register={register}
          name="brand"
          label="Marca"
          arrayValue={arrayMarcas}
          setSelect={setSelectBrand}
        />
        <Select
          register={register}
          name="model"
          label="Modelo"
          arrayValue={arrayModelos}
          setSelect={setSelectCar}
        />
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-[127px]">
            <Select
              register={register}
              name="year"
              label="Ano"
              arrayValue={arrayAnos}
              setSelect={setSelectYear}
            />
          </div>
          <div className="flex flex-col w-[127px]">
            <Select
              register={register}
              name="fuel"
              label="Combustível"
              arrayValue={arrayCombustivel}
              setSelect={setSelectFuel}
            />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-[127px]">
            <Input
              register={register}
              name="km"
              label="Quilometragem"
              placeholder={"Ex.: 30.000"}
            />
          </div>
          <div className="flex flex-col w-[127px]">
            <Input
              register={register}
              name="color"
              label="Cor"
              placeholder={"Ex.: Branco"}
            />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-[127px]">
            <Input
              register={register}
              name="fipe"
              placeholder="R$ 48.000,00"
              label="Preço tabela FIPE"
              valor={fipe}
            />
          </div>
          <div className="flex flex-col w-[127px]">
            <Input
              register={register}
              name="price"
              label="Preço"
              placeholder={"Ex.: 50.000,00"}
            />
          </div>
        </div>
        <Input
          register={register}
          name="description"
          label="Descrição"
          placeholder="Escreva detalhes do seu veículo"
        />
        <Input
          register={register}
          name="coverImage"
          label="Imagem da capa"
          placeholder={"Ex.: https://image.com"}
        />
        {inputCount.map((item) => (
          <Input
            register={register}
            name={`image${item}`}
            key={item}
            label={`${item}ª Imagem da galeria`}
            placeholder={"Ex.: https://image.com"}
          />
        ))}
        <div className="m-w-[315px]">
          <Button
            type="button"
            onClick={handleInputCount}
            variant={inputCount.length == 6 ? "disabled" : "brand-4"}
          >
            Adicionar campo para imagem da galeria
          </Button>
        </div>
        <div>
          <Button type="button" variant="gray-6">
            Cancelar
          </Button>

          <Button type="submit" variant="brand-4">
            Criar anúncio
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ModalAnuncio;

