import React from "react";
import { FilterList } from "../../src/components/FilterList";
import { CommentCard } from "../../src/components/CommentCard";
import { Button } from "../../src/components/Button";

export default function Register() {
  const texto =
    "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos";
  return (
    <>
      {/* <FilterList
        listaAnos={["2019", "2020"]}
        listaCombustivel={["Flex"]}
        listaCores={["preto", "branco"]}
        listaMarcas={["Audi", "Bmw"]}
        listaModelos={["m5", "sq5"]}
      /> */}
      <CommentCard
        initial="BP"
        datetime="3 dias"
        name="Bruno"
        text={texto}
        cor="random1"
      />
      <Button variant="brand-1">Abrir</Button>
    </>
  );
}
