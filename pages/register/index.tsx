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

export default function Register() {
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
      {/* <AsideProfile
        description={description}
        initials={initials}
        name="Bruno"
        cor={"random12"}
      /> */}
      {/* <FilterList
        listaAnos={["2019", "2020"]}
        listaCombustivel={["Flex"]}
        listaCores={["preto", "branco"]}
        listaMarcas={["Audi", "Bmw"]}
        listaModelos={["m5", "sq5"]}
      /> */}
      {/* <Footer /> */}
      {/* /* <CommentCard
        initial="BP"
        datetime="3 dias"
        name="Bruno"
        text={texto}
        cor="random1"
      /> */}
      <Button onClick={() => setOpenModalAnuncio(true)} variant="brand-1">
        Abrir
      </Button>
      {/* /* <AsidePhotos
        setPhoto={setPhoto}
        photos={photos}
        setOpenModal={setOpenModal}
      /> */}
      {openModalAnuncio && (
        <Modal setOpenModal={setOpenModalAnuncio}>
          <ModalAnuncio
            title="Criar anuncio"
            setOpenModalAnuncio={setOpenModalAnuncio}
          />
        </Modal>
      )}{" "}
      */
      {/* <CommentInput initials="BP" name="Bruno" cor="random10" /> */}
    </>
  );
}
