import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useAuth } from "../../contexts/authContext";
import { setCookie, parseCookies } from "nookies";
import { iUser } from "../../@types";
import { Button } from "../Button";

interface iCarCardProps {
  carName: string;
  carImg: string;
  carDescription: string;
  carSeller: string;
  carKm: number;
  carYear: number;
  carPrice: number;
  carId: string;
  carFipe: number;
  seller?: iUser;
  carIsActive: boolean;
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;

}

export const CarCardAnuncio = ({
  carName,
  carImg,
  carDescription,
  carSeller,
  carKm,
  carYear,
  carPrice,
  carId,
  carFipe,
  seller,
  carIsActive,
  setOpenModalEdit,
}: iCarCardProps) => {
  const { router, setIdSeller, user, setCarId, setCarData, setFipe } =
    useAuth();

  const getCarData = (carId: string, carKm: number, carPrice: number) => {
    setCarData({
      carId: carId,
      carKm: carKm,
      carPrice: carPrice,
    });
  };

  const getCarId = (id: string) => {
    setCarId(id);
    setIdSeller(carSeller);
    setCookie(null, "idSeller", carSeller);
    setCookie(null, "idCar", carId);
    router.push(`/car_page/${carId}`);
  };

  return (
    <>
      <div
        onClick={() => getCarId(carId)}
        className="w-[312px] mx-auto my-0 rounded-[5px]  box-border flex flex-col items-start justify-center gap-[10]  text-justify shadow-md cursor-pointer relative"
      >
        {user?.id == seller?.id ? (
          <></>
        ) : carIsActive ? (
          <div className="absolute top-1 left-1">
            <Button variant="brand-1">Ativo</Button>
          </div>
        ) : (
          <div className="absolute top-1 left-1">
            <Button variant="disabled">Inativo</Button>
          </div>
        )}
        <div className="flex w-full justify-center bg-gray5 box-border rounded-t-[4px]">
          <Image width={262} height={150} src={carImg} alt="foto carro" />
        </div>
        <div className="flex flex-col p-[10px] gap-[10px]">
          <h2 className="text-base font-semibold test-lex leading-5 text-gray0 ">
            {carName}
          </h2>
          <p className="text-sm text-gray2 text-inter font-normal">
            {carDescription && carDescription.length > 130
              ? `${carDescription.substring(0, 130)}...`
              : carDescription}
          </p>
          <div>
            <div className="flex items-center">
              {user?.id == seller?.id ? (
                <></>
              ) : (
                <p className="bg-brand1 p-[5px] flex justify-center items-center w-8 h-8 rounded-full text-whitefixed text-sm/[17px]">
                  {seller?.name?.toUpperCase().split("")[0]}
                  {seller?.name?.toUpperCase().split("")[1]}
                </p>
              )}
            </div>
          </div>
          <div className="flex w-full gap-[15px] items-center justify-around">
            <span className="text-sm pl-2 pt-1 pr-2 pb-1 text-brand1 bg-brand4">
              {carKm} Km
            </span>
            <span className="text-sm pl-2 pt-1 pr-2 pb-1 text-brand1 bg-brand4">
              {carYear}
            </span>
            <p>R$ {carPrice.toLocaleString()},00</p>
          </div>
        </div>
      </div>
      {user?.id == seller?.id ? (
        <div className="flex gap-5 mt-3">
          <Button
            onClick={() => {
              setOpenModalEdit(true),
                getCarData(carId, carKm, carPrice),
                setFipe(carFipe);
            }}
            variant="border-gray-10"
          >
            Editar
          </Button>
          <Button onClick={() => getCarId(carId)} variant="border-gray-10">
            Ver detalhes
          </Button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
