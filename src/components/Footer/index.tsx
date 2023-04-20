import React from "react";
import Logo from "../../assets/Motors_shop.png";
import upArrow from "../../assets/angle-up.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center w-full h-[310.34px] py-[45px] px-[55.5px] md:px-[59px] bg-gray0 md:flex-row">
      <Image className="text-gray10" src={Logo} alt="logo da empresa" />
      <p className="text-center w-[265px] text-gray10 font-inter font-normal text-sm">
        © 2022 - Todos os direitos reservados.
      </p>
      <button
        className="bg-gray1 p-5 rounded"
        onClick={() => window.scrollTo({ top: 1, behavior: "smooth" })}
      >
        <Image src={upArrow} alt="seta para cima" />
      </button>
    </footer>
  );
};
