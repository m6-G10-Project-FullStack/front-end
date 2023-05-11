import React from "react";
import pingo from "../../assets/Ellipse.png";
import Image from "next/image";
import { Button } from "../Button";
import { useAuth } from "../../contexts/authContext";

interface iCommentCardProps {
  initial?: string;
  name?: string;
  datetime?: string;
  text?: string;
  sellerId: string;
  commentOwnerId: string;
}

export const CommentCard = ({
  name,
  datetime,
  text,
  sellerId,
  commentOwnerId,
}: iCommentCardProps) => {
  const { user, isLogged } = useAuth();
  const handleDate = () => {
    const now = new Date();
    const formatedDate = new Date(datetime!);

    const passedTime = +now - +formatedDate;
    const millisecondDay = 1000 * 60 * 60 * 24;
    const millisecondHour = 1000 * 60 * 60;
    const millisecondMinute = 1000 * 60;

    if (passedTime < millisecondMinute) {
      const diffInSeconds = Math.floor(passedTime / 1000);
      return diffInSeconds < 1
        ? `${diffInSeconds} segundo atrás`
        : `${diffInSeconds} segundos atrás`;
    }

    if (passedTime < millisecondHour) {
      const diffInMinutes = Math.floor(passedTime / millisecondMinute);
      return diffInMinutes < 1
        ? `${diffInMinutes} minuto atrás`
        : `${diffInMinutes} minutos atrás`;
    }

    if (passedTime < millisecondDay) {
      const diffInHours = Math.floor(passedTime / millisecondHour);
      return diffInHours < 1
        ? `${diffInHours} hora atrás`
        : `${diffInHours} horas atrás`;
    }

    const diffInDays = Math.floor(passedTime / millisecondDay);
    return diffInDays < 1
      ? `${diffInDays} dia atrás`
      : `${diffInDays} dias atrás`;
  };

  handleDate();
  // console.log(`userId= ${user.id}`);
  // console.log(`sellerId= ${sellerId}`);
  // console.log(`commentOwnerId= ${commentOwnerId}`);
  return (
    <div className="w-full flex flex-col content-center mt-6 mb-11 relative">
      <div className="flex w-full gap-2 items-center">
        <div
          className={`flex rounded-full w-8 h-8 justify-center items-center text-gray10 font-inter font-semibold text-sm bg-brand1`}
        >
          <p className="text-whitefixed">
            {name?.toUpperCase().substring(0, 2)}
          </p>
        </div>
        <Image src={pingo} alt="um pontinho para enfeitar" />
        <h6 className="font-inter font-semibold text-sm text-gray1">{name}</h6>
        <span className="font-inter font-normal text-sm text-gray3">
          há {handleDate()}
        </span>
      </div>
      <p className="font-inter font-normal text-sm text-gray3 text-justify pt-4 max-w-[283px] md:max-w-[663px]">
        {text}
      </p>
      <div className="flex flex-col justify-center items-center gap-2 max-w-[80px] absolute right-0 top-0">
        {user.id === commentOwnerId ? (
          <Button variant="success-2">Atualizar</Button>
        ) : (
          <></>
        )}
        {user.id === commentOwnerId || user.id === sellerId ? (
          <Button variant="alert-2">Remover</Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
