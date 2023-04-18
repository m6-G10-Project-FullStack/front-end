import React from "react";
import pingo from "../../assets/Ellipse.png";
import Image from "next/image";

interface iCommentCardProps {
  initial: string;
  name: string;
  datetime: string;
  text: string;
  cor:
    | "random1"
    | "random2"
    | "random3"
    | "random4"
    | "random5"
    | "random6"
    | "random7"
    | "random8"
    | "random9"
    | "random10"
    | "random11"
    | "random12";
}

const corMap = {
  random1: "bg-random1",
  random2: "bg-random2",
  random3: "bg-random3",
  random4: "bg-random4",
  random5: "bg-random5",
  random6: "bg-random6",
  random7: "bg-random7",
  random8: "bg-random8",
  random9: "bg-random9",
  random10: "bg-random10",
  random11: "bg-random11",
  random12: "bg-random12",
};

export const CommentCard = ({
  initial,
  name,
  datetime,
  text,
  cor,
}: iCommentCardProps) => {
  const styles =
    "flex rounded-full w-8 h-8 justify-center items-center text-gray10 font-inter font-semibold text-sm";
  const classname = [styles, corMap[cor]].join(" ");
  return (
    <div className="w-full flex flex-col content-center mt-6 mb-11">
      <div className="flex w-full gap-2 items-center">
        <div className={classname}>
          <span>{initial}</span>
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
