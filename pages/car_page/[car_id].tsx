import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import car from "../../src/assets/car.png";
import { Button } from "../../src/components/Button";
import { CommentCard } from "../../src/components/CommentCard";
import CommentInput from "../../src/components/CommentInput";
import { AsidePhotos } from "../../src/components/AsidePhotos";
import { photos } from "./dataFotos";
import AsideProfile from "../../src/components/AsideProfile";
import { Modal } from "../../src/components/ModalWrapper";
import { ModalPhoto } from "../../src/components/Modal";
//import { Header } from "../../src/components/Header";
const CardPage = () => {
  const user = {
    name: "Roberto",
    initial: "RS",
    description: "Vendedor especialido em carros de luxo.",
    text: "Roberto jr, empresario e vendedor de carros",
    cor: "random1",
  };

  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useState("");
  const photos = [
    "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202302/20230227/porsche-taycan-turbo-s-eletrico-wmimagem17570311526.jpg?s=fill&w=1920&h=1440&q=75",
    "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202302/20230227/porsche-taycan-turbo-s-eletrico-wmimagem17570262036.jpg?s=fill&w=1920&h=1440&q=75",
    "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202302/20230227/porsche-taycan-turbo-s-eletrico-wmimagem17570311526.jpg?s=fill&w=1920&h=1440&q=75",
    "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202302/20230227/porsche-taycan-turbo-s-eletrico-wmimagem17570396931.jpg?s=fill&w=1920&h=1440&q=75",
    "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202302/20230227/porsche-taycan-turbo-s-eletrico-wmimagem17570508335.jpg?s=fill&w=1920&h=1440&q=75",
    "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202302/20230227/porsche-taycan-turbo-s-eletrico-wmimagem17570653610.jpg?s=fill&w=1920&h=1440&q=75",
  ];

  return (
    <>
      {/* <Header isLoggedIn={true} user={user} /> */}
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <ModalPhoto setOpenModal={setOpenModal} carImg={photo} />
        </Modal>
      )}
      <main className="my-0 mx-auto xl:p-[30px] md:p-[20px] flex flex-col md:min-w-[375px] xl:max-w-[1600px] xl:flex-row xl:items-start md:items-center content-start justify-center  box-border gap-[15px] bg-gradient-to-b from-brand1 from-30%  to-brand4 to-20%">
        <section className="flex flex-col gap-[10px] p-[10px] xl:p-[30px]  md:p-[15px] box-border w-full content-center md:flex-wrap md:m-[5px] xl:m-[10px]">
          <section className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-center g-[32px] rounded">
            <Image className="w-[294px] md:w-[441px] " src={car} alt="Card" />
          </section>
          <section className=" shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded">
            <h1 className="text-base font-semibold font-lex text-gray0">
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
            </h1>
            <div className="xl:flex mx:flex-col gap-3 text-center justify-center md:justify-between text-base ">
              <div className="flex justify-between items-center ">
                <span className="bg-brand4 h-[32px] w-[50px] rounded ml-[5px] py-[8px] px-[4px] text-brand1 ">
                  2013
                </span>
                <span className="bg-brand4 h-[32px] w-[50px] rounded ml-[5px] py-[8px] px-[4px]  text-brand1">
                  0 KM
                </span>
              </div>
              <p className="font-semibold">R$ 00.000,00</p>
            </div>
            <Button
              className="xl:w-[20%] mt-3 w-[100px] min-w-[100px] rounded p-2 bg-brand1 text-whitefixed"
              variant="brand-1"
            >
              Comprar
            </Button>
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
            <CommentCard
              cor={user.cor}
              datetime="11/04/2023"
              name="Roberto"
              initial="RS"
              key="1"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </div>
          <section className="shadow-sm flex p-[30px] md:w-[751px] bg-whitefixed w-full flex-col justify-center items-start g-[32px] rounded">
            <CommentInput
              initials={user.initial}
              name={user.name}
              cor={user.cor}
            />
          </section>
        </section>
        <aside className="flex content-center md:mt-[0px] md:mr-[0px] md:ml-[0px] xl:mt-[35px] xl:mr-[55px] xl:ml-[-40px] md:w-[752px] md:p-0  md: justify-center items-center p-[10px] flex-col  h-[100%] gap-[15px] ">
          <div className=" bg-whitefixed w-full flex rounded-lg flex-col items-center justify-center">
            <AsidePhotos
              setOpenModal={setOpenModal}
              setPhoto={setPhoto}
              photos={photos}
            />
          </div>
          <div className=" bg-whitefixed w-full flex rounded-lg flex-col items-center justify-center">
            <AsideProfile
              name={user.name}
              cor={user.cor}
              description={user.description}
              initials={user.initial}
            />
          </div>
        </aside>
      </main>
      {/* flex my-0 mx-auto flex-col gap-[10px] items-center  p-[30px] box-border w-[440px] xl:w-full content-center xl:flex-wrap md:m-1 */}
    </>
  );
};

export default CardPage;
