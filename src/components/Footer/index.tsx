import React from "react";
import Logo from "../../assets/Motors_shop.png";
import upArrow from "../../assets/angle-up.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-[310.34px] py-[45px] px=[55.5px] bg-gray0 md:flex-row">
      <Image className="text-gray10" src={Logo} alt="logo da empresa" />
      <p className="text-center w-[265px] text-gray10 font-inter font-normal text-sm">
        © 2022 - Todos os direitos reservados.
      </p>
      <a
        href="#top"
        className="flex justify-center items-center h-[50px] w-[53px] bg-gray1 text-gray10 rounded-s"
      >
        <Image src={upArrow} alt="seta para cima" />
      </a>
    </div>
  );
};
