import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { StyleDiv } from "./style";

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
      <StyleDiv>
        <div className="div-img-car">
          <Image className="img--div" src={carImg} alt="foto carro" />
        </div>
        <div className="div-text-car">
          <h2>{carName}</h2>
          <p>{carDescription.slice(0, 130) + "..."}</p>
          <div>
            <div className="div--seller">
              <p className="tag--iniciais">{handleInitials()}</p>
              <p className="name-seller">{carSeller}</p>
            </div>
          </div>
          <div className="tag--details-car">
            <span>{carKm} Km</span>
            <span>{carYear}</span>
            <p>R$ {carPrice.toFixed(2)}</p>
          </div>
        </div>
      </StyleDiv>
    </>
  );
};
