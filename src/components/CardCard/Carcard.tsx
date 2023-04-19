import React from "react";
//import { StaticImageData } from "next/image";
import Image from "next/image";

interface iCarCardProps {
  carName: string;
  carImg: string;
  carDescription: string;
  carSeller: string;
  carKm: number;
  carYear: number;
  carPrice: number;
}

export const CarCard = ({
  carName,
  carImg,
  carDescription,
  carSeller,
  carKm,
  carYear,
  carPrice,
}: iCarCardProps) => {
  const handleInitials = () => {
    const arr = carSeller.split(" ");

    return arr[0][0] + arr[1][0];
  };

  return (
    <>
      <div className="w-[312px] mx-auto my-0 box-border flex flex-col items-start justify-center gap-[10]  text-justify drop-shadow-md cursor-pointer ">
        <div className="flex w-full justify-center bg-gray5 box-border ">
          <Image
            width={262}
            height={150}
            //className="w-[262px] h-[100%]"
            src={carImg}
            alt="foto carro"
          />
        </div>
        <div className="flex flex-col p-[10px] gap-[10px]">
          <h2 className="text-base font-semibold test-lex leading-5 text-gray0 ">
            {carName}
          </h2>
          <p className="text-sm text-gray2 text-inter font-normal">
            {carDescription.slice(0, 130) + "..."}
          </p>
          <div>
            <div className="flex items-center">
              <p className="bg-brand1 p-[5px] flex justify-center items-center w-8 h-8 rounded-full text-whitefixed text-sm/[17px]">
                {handleInitials()}
              </p>
              <p className="pl-[5px] items-center text-sm text-gray2 text-inter font-medium">
                {carSeller}
              </p>
            </div>
          </div>
          <div className="flex w-[100%] gap-[15px] items-center justify-around">
            <span className="text-sm pl-[8px] pt-[4px] pr-[8px] pb-[4px] text-brand1 bg-brand4">
              {carKm} Km
            </span>
            <span className="text-sm pl-[8px] pt-[4px] pr-[8px] pb-[4px] text-brand1 bg-brand4">
              Ano{carYear}
            </span>
            <p>R$ {carPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};