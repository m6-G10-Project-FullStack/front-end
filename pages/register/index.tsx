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
      <div className="div-container-registro">
        <h1>Cadastro</h1>
        <h3>Informações pessoais</h3>

        <div>
          <Input label="Nome" placeholder="Ex: Samantha Leana" />
        </div>

        <div>
          <Input label="Email" placeholder="Ex: sammylea@vendecarro.com.br" />
        </div>

        <div>
          <Input label="CPF" placeholder="000.000.000-00" />
        </div>

        <div>
          <Input label="Celular" placeholder="(DDD) 90000-0000" />
        </div>

        <div>
          <Input label="Data de nascimento" placeholder="00/00/00" />
        </div>

        <div>
          <Input label="Descrição" placeholder="Digitar descrição" />
        </div>

        <h3>Informações de endereço</h3>
        <div>
          <Input label="CEP" placeholder="0000.000" />
        </div>

        <div className="div-para-coluna">
          <div>
            <Input label="Estado" placeholder="Digitar estado" />
          </div>

          <div>
            <Input label="Cidade" placeholder="Digitar cidade" />
          </div>
        </div>

        <div>
          <Input label="Rua" placeholder="Digitar senha da sua rua" />
        </div>

        <div className="div-para-coluna">
          <div>
            <Input label="Número" placeholder="Digitar número" />
          </div>

          <div>
            <Input label="Complemento" placeholder="Digitar complemento" />
          </div>
        </div>

        <h4>Tipo de conta</h4>
        <div>
          <h5 className="font-bold mb-2">Tipo de conta</h5>
          <div>
            <button
              className={`py-2 px-4 rounded-lg ${
                isBuyer
                  ? "bg-brand1  text-gray9 border-2 border-blue-600"
                  : "bg-gray9  border-2 border-gray-100"
              }`}
              onClick={() => {
                setIsBuyer(true);
                setIsSeller(false);
              }}
            >
              Comprador
            </button>
            <button
              className={`py-2 px-4 rounded-lg ${
                isSeller
                  ? "bg-brand1  text-gray9 border-2 border-blue-600"
                  : "bg-gray9   border-2 border-gray-100"
              }`}
              onClick={() => {
                setIsSeller(true);
                setIsBuyer(false);
              }}
            >
              Anunciante
            </button>
          </div>

          <div>
            <Input label="Senha" placeholder="Digitar senha" />
          </div>

          <div>
            <Input label="Confirmar Senha" placeholder="Digitar senha" />
          </div>
        </div>
      </div>
    </>
  );
}
