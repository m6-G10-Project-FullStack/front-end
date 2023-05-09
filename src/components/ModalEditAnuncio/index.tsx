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

export interface iModalEditAnnouncementProps {
  setOpenModalEdit: React.Dispatch<SetStateAction<boolean>>;
}

export interface iCarEditAnnouncement {
  brand?: string;
  model?: string;
  year?: string;
  km?: number;
  fuel?: string;
  color?: string;
  fipe?: number;
  price?: number;
  description?: string;
  coverImage?: string;
  photos?: string[];
}

interface iModalEditAnuncioProps {
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  brands?: string[];
  setSelectBrand?: React.Dispatch<React.SetStateAction<string>>;
  cars?: string[];
  setSelectCar?: React.Dispatch<React.SetStateAction<string>>;
  years?: string[];
  setSelectYear?: React.Dispatch<React.SetStateAction<string>>;
  fuels?: string[];
  setSelectFuel?: React.Dispatch<React.SetStateAction<string>>;
  fipe?: number | null;
  setSelectColor?: React.Dispatch<React.SetStateAction<string>>;
}

const ModalEditAnuncio = ({
  setOpenModalEdit,
  brands,
  setSelectBrand,
  cars,
  setSelectCar,
  years,
  setSelectYear,
  fuels,
  setSelectFuel,
  fipe,
  setSelectColor,
}: iModalEditAnuncioProps) => {
  const arrayMarcas = brands;
  const arrayModelos = cars;
  const arrayAnos = years;
  const arrayCombustivel = fuels;
  const arrayColorsCars = [
    "Branco",
    "Preto",
    "Prata",
    "Vermelho",
    "Azul",
    "Colorido",
  ];
  const [inputCount, setInputCount] = useState([1, 2]);
  const { user, token, carId, carData, router } = useAuth();

  const handleInputCount = () => {
    if (inputCount.length < 6) {
      setInputCount([...inputCount, inputCount.length + 1]);
    }
  };

  const FormSchema: any = yup.object().shape({
    brand: yup.string().notRequired(),
    model: yup.string().notRequired(),
    year: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    km: yup.number().nullable(),
    color: yup.string().notRequired(),
    fipe: yup.number().nullable(),
    price: yup.number().nullable(),
    description: yup.string().notRequired(),
    coverImage: yup.string().notRequired(),
    image1: yup.string().notRequired(),
    image2: yup.string().notRequired(),
    image3: yup.string().notRequired(),
    image4: yup.string().notRequired(),
    image5: yup.string().notRequired(),
    image6: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iCarEditAnnouncement>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmitForm = async (data: iCarEditAnnouncement) => {
    console.log(data);
    try {
      const filteredData = Object.entries(data).reduce<Record<string, string>>(
        (acc, [key, value]) => {
          if (value !== "Selecione") {
            acc[key] = value;
          }

          return acc;
        },
        {}
      );

      const lastFilteredData = Object.entries(filteredData).reduce<
        Record<string, string>
      >((acc, [key, value]) => {
        if (value !== "") {
          acc[key] = value;
        }

        return acc;
      }, {});

      let brandId = "";
      if (data.brand && data.brand !== "" && data.brand !== "Selecione") {
        brandId = await getBrandId(data.brand);
        const newfilteredData = { ...lastFilteredData, brandId };
        const carEdited = await editCarId(newfilteredData);
      }

      const carEdited = await editCarId(lastFilteredData);

      // REMOVER FOTOS DA GALERIA //

      // const {
      //   brand,
      //   year,
      //   fuel,
      //   km,
      //   color,
      //   fipe,
      //   price,
      //   description,
      //   model,
      //   coverImage,
      //   ...gallery
      // } = data;
      // const values = Object.values(gallery);
      // if (values) {
      //   for (let value of values) {
      //     if(value !== ""){
      //       let newPhoto = {
      //         carId: carData.carId,
      //         photo_link: value,
      //       };
      //       await api.post("/gallery", newPhoto, {
      //         headers: { Authorization: `Bearer ${token}` },
      //       });

      //     }
      //   }
      // }

      setOpenModalEdit(false);
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const getBrandId = async (brand: string) => {
    try {
      const { data } = await api.get(`/brands/${brand}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.id;
    } catch (error) {
      console.log(error);
    }
  };

  const editCarId = async (payload: any) => {
    try {
      const { data } = await api.patch(`/cars/${carData.carId}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleExclude = async () => {
    await api
      .delete(`/cars/${carData.carId}/permanent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gray10 w-full h-max max-h-[700px] max-w-custom344 flex flex-col content-center rounded-lg px-6 py-4 md:max-w-lg relative overflow-y-auto scrollbar-w-6 scrollbar-track-gray-100 scrollbar-thumb-gray-500 scrollbar-thumb-rounded-md">
        <div className="flex w-full justify-between items-center">
          <p className="font-lex font-medium text-base text-gray1">
            Editar anúncio
          </p>
          <button
            className="h-10 flex border-none bg-transparent text-gray3 text-custom22 cursor-pointer"
            onClick={() => setOpenModalEdit(false)}
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
                valor={carData.carKm!}
              />
            </div>
            <div className="flex flex-col w-[127px]">
              <Select
                register={register}
                name="color"
                label="Cor"
                arrayValue={arrayColorsCars}
                setSelect={setSelectColor}
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
                valor={carData.carPrice!}
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
          <div className="m-w-[315px] self-center">
            <Button
              type="button"
              onClick={handleInputCount}
              variant={inputCount.length == 6 ? "disabled" : "brand-4"}
            >
              Adicionar campo para imagem da galeria
            </Button>
          </div>
          <div className="flex justify-between items-center w-full mt-4">
            <Button
              onClick={() => handleExclude()}
              type="button"
              variant="gray-6"
            >
              Excluir carro
            </Button>

            <Button type="submit" variant="brand-4">
              Atualizar anúncio
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalEditAnuncio;
