import React from "react";
import pingo from "../../assets/Ellipse.png";
import Image from "next/image";

interface iCommentCardProps {
  initial?: string;
  name?: string;
  datetime?: string;
  text?: string;
  cor?: string;
}

export const CommentCard = ({
  name,
  datetime,
  text,
  cor,
}: iCommentCardProps) => {
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

  return (
    <div className="w-full flex flex-col content-center mt-6 mb-11">
      <div className="flex w-full gap-2 items-center">
        <div
          className={`flex rounded-full w-8 h-8 justify-center items-center text-gray10 font-inter font-semibold text-sm bg-${cor}`}
        >
          <p className="text-whitefixed">
            {name?.toUpperCase().split("")[0]}
            {name?.toUpperCase().split("")[1]}
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
    </div>
  );
};
