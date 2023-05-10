import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useAuth } from "../../contexts/authContext";
import { setCookie, parseCookies } from "nookies";

interface iCarCardProps {
  carName: string;
  carImg: string;
  carDescription: string;
  carSeller: string;
  carKm: number;
  carYear: number;
  carPrice: number;
  carId: string;
  carSellerName: string;
  carIsPromo: boolean;
}

export const CarCard = ({
  carName,
  carImg,
  carDescription,
  carSeller,
  carKm,
  carYear,
  carPrice,
  carId,
  carSellerName,
  carIsPromo,
}: iCarCardProps) => {
  const { router, setIdSeller } = useAuth();
  const [idCar, setCarId] = useState<string>();

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
        className="w-[312px] mx-auto my-0 rounded-[5px]  box-border flex flex-col items-start justify-center gap-[10]  text-justify shadow-md cursor-pointer"
      >
        <div className="flex w-full justify-center bg-gray5 box-border rounded-t-[4px] relative">
          {carIsPromo && (
            <div className="absolute top-0 right-0 bg-random7 h-7 w-4 flex justify-center items-center font-inter font-medium text-sm text-gray10 leading-4">
              $
            </div>
          )}
          <Image
            className="w-full"
            style={{ objectFit: "fill" }}
            width={262}
            height={150}
            src={carImg}
            alt="foto carro"
          />
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
              <p className="bg-brand1 p-[5px] flex justify-center items-center w-8 h-8 rounded-full text-whitefixed text-sm/[17px]">
                {carSellerName.toUpperCase().split("")[0]}
                {carSellerName.toUpperCase().split("")[1]}
              </p>
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
    </>
  );
};
