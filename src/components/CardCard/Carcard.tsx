import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface iCarCardProps {
  carName: string;
  carImg: StaticImageData;
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
          <Image className="w-[262px] h-[100%]" src={carImg} alt="foto carro" />
        </div>
        <div className="flex flex-col p-[10px] gap-[10px]">
          <h2>{carName}</h2>
          <p>{carDescription.slice(0, 130) + "..."}</p>
          <div>
            <div className="flex items-center">
              <p className="bg-brand1 p-[5px] rounded-md text-whitefixed text-sm/[17px]">
                {handleInitials()}
              </p>
              <p className="pl-[5px] items-center">{carSeller}</p>
            </div>
          </div>
          <div className="flex w-[100%] gap-[15px] items-center justify-around">
            <span className="text-sm/[14px] pl-[8px] pt-[4px] pr-[8px] pb-[4px] text-brand1 bg-brand4">
              {carKm} Km
            </span>
            <span className="text-sm/[14px] pl-[8px] pt-[4px] pr-[8px] pb-[4px] text-brand1 bg-brand4">
              Ano{carYear}
            </span>
            <p>R$ {carPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
