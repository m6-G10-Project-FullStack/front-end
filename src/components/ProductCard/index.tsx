import React from "react";
import car from "../../assets/car.png";
import Image from "next/image";
import { StyleDiv } from "./style";
export const ProductCard = () => {
  return (
    <>
      <StyleDiv>
        <div className="div-img-car">
          <Image className="img--div" src={car} alt="foto carro" />
        </div>
        <div className="div-text-car">
          <h2>Nome do Carro</h2>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor ...
          </p>
          <div>
            <div className="div--seller">
              <p className="tag--iniciais">SL</p>
              <p className="name-seller">Anunciante</p>
            </div>
          </div>
          <div className="tag--details-car">
            <span>O OKM</span>
            <span>2019</span>
            <p>R$ 00.000,00</p>
          </div>
        </div>
      </StyleDiv>
    </>
  );
};
