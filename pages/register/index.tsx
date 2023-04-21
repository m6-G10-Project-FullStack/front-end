import React, { useState } from "react";
import { FilterList } from "../../src/components/FilterList";
import { CommentCard } from "../../src/components/CommentCard";
import { Button } from "../../src/components/Button";
import { Footer } from "../../src/components/Footer";
import AsideProfile from "../../src/components/AsideProfile";
import { Modal } from "../../src/components/ModalWrapper";
import { ModalPhoto } from "../../src/components/Modal";
import { AsidePhotos } from "../../src/components/AsidePhotos";
import CommentInput from "../../src/components/CommentInput";
import ModalAnuncio from "../../src/components/ModalAnuncio";
import Input from "../../src/components/Input";
import { Header } from "../../src/components/Header";

export default function Register() {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const texto =
    "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos";
  const initials = "ST";
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's";
  const [openModalAnuncio, setOpenModalAnuncio] = useState(false);
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
      <Header />
      <main className="w-full flex justify-center items-center bg-gray8">
        <div className="flex flex-col max-w-2 mt-[30px] mb-[30px]">
          <form action="" className="bg-whitefixed p-2 rounded shadow">
            <h1 className="text-3xl font-semibold text-gray-800 m-2">
              Cadastro
            </h1>
            <h3 className="text-1xl font-semibold text-gray-800 m-2">
              Informações pessoais
            </h3>
            <div className="flex flex-col m-2">
              <div>
                <Input label="Nome" placeholder="Ex: Samantha Leana" />
              </div>

              <div className="m-2">
                <Input
                  label="Email"
                  placeholder="Ex: sammylea@vendecarro.com.br"
                />
              </div>

              <div className="m-2">
                <Input label="CPF" placeholder="000.000.000-00" />
              </div>

              <div className="m-2">
                <Input label="Celular" placeholder="(DDD) 90000-0000" />
              </div>

              <div className="m-2">
                <Input label="Data de nascimento" placeholder="00/00/00" />
              </div>

              <div className="m-2">
                <Input label="Descrição" placeholder="Digitar descrição" />
              </div>

              <h3 className="text-1xl font-semibold text-gray-800 m-2">
                Informações de endereço
              </h3>
              <div>
                <Input label="CEP" placeholder="0000.000" />
              </div>

              <div className="flex justify-between gap-4">
                <div className="flex flex-col w-[127px]">
                  <Input label="Estado" placeholder="Digitar estado" />
                </div>

                <div className="flex flex-col w-[127px]">
                  <Input label="Cidade" placeholder="Digitar cidade" />
                </div>
              </div>

              <div className="m-2">
                <Input label="Rua" placeholder="Digitar senha da sua rua" />
              </div>

              <div className="flex justify-around gap-2">
                <div className="flex flex-col w-[140px]">
                  <Input label="Número" placeholder="Digitar número" />
                </div>

                <div className="flex flex-col w-[140px]">
                  <Input label="Complemento" placeholder="Ex: Apart 307" />
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-4">Tipo de conta</h5>
                <div className="flex gap-2 mb-3 justify-center">
                  <button
                    className={`w-[138px] py-2 px-4 rounded border-[1px] ${
                      isBuyer ? "bg-brand1  text-gray9" : "bg-gray9  text-gray1"
                    }`}
                    onClick={() => {
                      setIsBuyer(true);
                      setIsSeller(false);
                    }}
                  >
                    Comprador
                  </button>
                  <button
                    className={`w-[138px] py-2 px-4 rounded border-[1px] ${
                      isSeller ? "bg-brand1  text-gray9" : "bg-gray9 text-gray1"
                    }`}
                    onClick={() => {
                      setIsSeller(true);
                      setIsBuyer(false);
                    }}
                  >
                    Anunciante
                  </button>
                </div>

                <div className="m-2">
                  <Input label="Senha" placeholder="Digitar senha" />
                </div>

                <div className="m-2">
                  <Input label="Confirmar Senha" placeholder="Digitar senha" />
                </div>

                <button className="w-[276px] py-2 px-4 rounded border-[1px] bg-brand1 text-gray9">
                  Finalizar cadastro
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
