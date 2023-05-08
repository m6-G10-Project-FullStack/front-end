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
          {" "}
          há {datetime}
        </span>
      </div>
      <p className="font-inter font-normal text-sm text-gray3 text-justify pt-4 max-w-[283px] md:max-w-[663px]">
        {text}
      </p>
    </div>
  );
};
