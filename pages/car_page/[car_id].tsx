import React from "react";
import Image from "next/dist/client/image";
import car from "../../src/assets/car.png";
//import { Button } from "../../src/components/Button";
import { CommentCard } from "../../src/components/CommentCard";
//import CommentInput from "../../src/components/CommentInput";
//import { MainStyled } from "./style";
//import { AsidePhotos } from "../../src/components/AsidePhotos";
//import { photos } from "./dataFotos";
//import AsideProfile from "../../src/components/AsideProfile";
//import { Header } from "../../src/components/Header";
const CardPage = () => {
  const user = {
    name: "Roberto",
    initials: "RS",
    description: "Vendedor especialido em carros de luxo.",
  };

  return (
    <>
      {/* <Header isLoggedIn={true} user={user} /> */}
      <main className="my-0 mx-auto flex flex-col max-w-[1600px] xl:flex-row content-center justify-center  box-border gap-[15px] bg-gradient-to-b from-brand1 from-30%  to-brand4 to-20%">
        <section className="flex flex-col gap-[10px]  p-[30px] box-border w-full content-center md:flex-wrap md:m-1">
          <section className="flex box-border w-full  md:max-w-[752px] items-center content-center justify-center rounded shadow-md bg-whitefixed">
            <Image className="w-[294px] md:w-[441px] " src={car} alt="Card" />
          </section>
          <section className=" flex flex-col md:w-[751px] w-full shadow-md gap-[8px] rounded p-11 bg-whitefixed">
            <h1 className="text-base font-semibold font-lex text-gray0">
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
            </h1>
            <div className="flex justify-between text-base">
              <div>
                <span className="bg-brand4 h-[32px] w-[50px] rounded ml-[5px] py-[8px] px-[4px] text-brand1 ">
                  2013
                </span>
                <span className="bg-brand4 h-[32px] w-[50px] rounded ml-[5px] py-[8px] px-[4px]  text-brand1">
                  0 KM
                </span>
              </div>
              <p className="font-semibold">R$ 00.000,00</p>
            </div>
            {/* <Button
              variant="brand-1"
              size="small"
              clickFunction={() => console.log("comprou")}
            >
              Comprar
            </Button> */}
          </section>
          <section className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded ">
            <h2 className="font-semibold text-base">Descrição</h2>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </section>
          <div className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded">
            {/* <CommentCard
              cor="blue"
              datetime="11/04/2023"
              name="Roberto"
              initial="RS"
              key="1"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            /> */}
          </div>
          <section className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded">
            <div>
              <span>SL</span>
              <span>Samuel Leão</span>
            </div>
            {/* <CommentInput user={user} /> */}
          </section>
        </section>
        <aside className="flex flex-col gap-[10px]  p-[30px] box-border w-full content-center md:flex-wrap md:m-1">
          <div className="shadow-sm flex p-[15px] w-full md:max-w-[759px] bg-whitefixed rounded shadow-md">
            teste
            {/* <AsidePhotos photos={photos} />
          </div>
          <div>
            <AsideProfile user={user} /> */}
          </div>
        </aside>
      </main>
    </>
  );
};

export default CardPage;
