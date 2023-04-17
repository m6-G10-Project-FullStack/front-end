import React from "react";
import pingo from "../../assets/Ellipse.png";
import Image from "next/image";
import styles from "./CommentCard.module.css";

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
  random1: styles.random1,
  random2: styles.random2,
  random3: styles.random3,
  random4: styles.random4,
  random5: styles.random5,
  random6: styles.random6,
  random7: styles.random7,
  random8: styles.random8,
  random9: styles.random9,
  random10: styles.random10,
  random11: styles.random11,
  random12: styles.random12,
};

export const CommentCard = ({
  initial,
  name,
  datetime,
  text,
  cor,
}: iCommentCardProps) => {
  const classname = [styles.root, corMap[cor]].join(" ");
  return (
    <div className="w-full flex flex-col content-center mt-6 mb-11">
      <div className="flex w-full gap-2 items-center">
        <div className={classname}>
          <span>{initial}</span>
        </div>
        <Image src={pingo} alt="um pontinho para enfeitar" />
        <h6 className="body-25 text-gray1">{name}</h6>
        <span className="body-24 text-gray3"> há {datetime}</span>
      </div>
      <p className="body-24 text-gray3 text-center pt-4">{text}</p>
    </div>
  );
};
