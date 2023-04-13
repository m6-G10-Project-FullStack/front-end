import React from "react";
import pingo from "../../assets/Ellipse.png";
import Image from "next/image";
import * as styled from "./style";

export interface iCommentCardProps {
  initial: string;
  name: string;
  datetime: string;
  text: string;
  cor: string;
}

export const CommentCard = ({
  initial,
  name,
  datetime,
  text,
  cor,
}: iCommentCardProps) => {
  return (
    <styled.Container>
      <div className="div-header">
        <styled.Div cor={cor}>
          <span>{initial}</span>
        </styled.Div>
        <Image src={pingo} alt="um pontinho para enfeitar" />
        <h6>{name}</h6>
        <span> há {datetime}</span>
      </div>
      <p>{text}</p>
    </styled.Container>
  );
};
